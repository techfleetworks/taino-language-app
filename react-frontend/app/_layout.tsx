import React, { useCallback, useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';
import * as Font from 'expo-font';

import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text } from 'react-native';
import { AuthProvider } from '@/lib/AuthProvider';
import Header from '@/components/common/Header';
import Colors from '@/constants/Colors';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loaded, error] = useFonts({
    Inter_900Black,
    ...FontAwesome.font,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Inter_900Black,
          ...FontAwesome.font,
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && loaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, loaded]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  if (!appIsReady || !loaded) {
    return null;
  }

  return <RootLayoutNav onLayout={onLayoutRootView} />;
}

function RootLayoutNav({ onLayout }: { onLayout: () => Promise<void> }) {
  const colorScheme = useColorScheme();
  const { width, height } = useWindowDimensions();

  const isLargeScreen = width >= 768; // Threshold for tablet/desktop

  const aspectRatio = 390 / 844;
  
  let frameHeight = height;
  let frameWidth = frameHeight * aspectRatio;

  if (frameWidth > width) {
    frameWidth = width;
    frameHeight = frameWidth / aspectRatio;
  }

  const scaleFactor = frameHeight / 844;

  const containerStyle = isLargeScreen
    ? styles.largeScreenContainer
    : styles.smallScreenContainer;

  const phoneFrameStyle = isLargeScreen
    ? {
        ...styles.phoneFrame,
        width: frameWidth,
        height: frameHeight,
      }
    : styles.fullScreenFrame;

  const contentStyle = isLargeScreen
    ? {
        transform: [{ scale: scaleFactor }],
        width: 390,
        height: 844,
        backgroundColor: Colors.background,
      }
    : { flex: 1 };

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <View style={containerStyle} onLayout={onLayout}>
          <View style={phoneFrameStyle}>
            <View style={contentStyle}>
              <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen
                  name="(tabs)"
                />
                <Stack.Screen name="lesson" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding/write-your-name" options={{ headerShown: true, header: () => <Header variant="empty" /> }} />
                <Stack.Screen name="onboarding/lesson-one" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding/create-account" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding/welcome" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding/introduction" options={{ headerShown: true, header: () => <Header variant="back" /> }} />
                <Stack.Screen name="signup" options={{ headerShown: true, header: () => <Header variant="back" /> }} />
                <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
                <Stack.Screen name="(auth)/callback" />
              </Stack>
            </View>
          </View>
        </View>
      </ThemeProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    fontFamily: 'Inter',
  },
  largeScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.surface
  },
  smallScreenContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  phoneFrame: {
    overflow: 'hidden',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenFrame: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.white,
  },
});
