import React, { useEffect, useState, createContext, useContext } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Add this interface near the top of the file
interface AuthContextType {
  user: any;
  login: () => Promise<AuthSession.AuthSessionResult>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

// Update context creation
export const AuthContext = createContext<AuthContextType | null>(null);

// Provider wrapper
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  // Auth0 configuration
  const config = {
    domain: process.env.EXPO_PUBLIC_AUTH0_DOMAIN,
    clientId: process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID,
    redirectUri: AuthSession.makeRedirectUri({
      scheme: 'learntaino',
      path: '(auth)/callback'
    })
  };

  const discovery = {
    authorizationEndpoint: `https://${config.domain}/authorize`,
    tokenEndpoint: `https://${config.domain}/oauth/token`,
    revocationEndpoint: `https://${config.domain}/oauth/revoke`,
  };

  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: config.clientId!,
      redirectUri: config.redirectUri,
      responseType: 'token id_token',
      scopes: ['openid', 'profile', 'email'],
      extraParams: {
        nonce: Math.random().toString(36).substring(2, 15)
      }
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      
      fetch(`https://${config.domain}/userinfo`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then(response => response.json())
        .then(userData => {
          setUser(userData);
          AsyncStorage.setItem('auth0User', JSON.stringify(userData));
          AsyncStorage.setItem('auth0AccessToken', access_token);
          router.replace('/(app)');
        })
        .catch(console.error)
        .finally(() => setIsLoading(false));
    }
  }, [response]);

  // Check for existing session on mount
  useEffect(() => {
    AsyncStorage.getItem('auth0User')
      .then(userData => {
        if (userData) {
          setUser(JSON.parse(userData));
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  // Handle routing based on auth state
  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';
    const inAppGroup = segments[0] === '(app)';
    const inOnboardingGroup = segments[0] === 'onboarding';

    if (!isLoading) {
      if (!user && !inAuthGroup && !inOnboardingGroup) {
        // Redirect to index if not authenticated and not in auth or onboarding group
        router.replace('/');
      } else if (user && inAuthGroup) {
        // Redirect to home if authenticated and in auth group
        router.replace('/(app)');
      }
    }
  }, [user, segments, isLoading]);

  const login = async () => {
    const result = await promptAsync();
    return result;
  };

  const logout = async () => {
    await AsyncStorage.removeItem('auth0User');
    await AsyncStorage.removeItem('auth0AccessToken');
    setUser(null);
    
    WebBrowser.openBrowserAsync(
      `https://${config.domain}/v2/logout?client_id=${config.clientId}&returnTo=${encodeURIComponent(config.redirectUri)}`
    );
    
    router.replace('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth requires being used within the AuthProvider');

  return context;
};
