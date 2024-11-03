import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import { useWindowDimensions } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text } from 'react-native';

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
  const [loaded, error] = useFonts({
    Inter_900Black,
    ...FontAwesome.font,
  });
  
  useFonts({
    Inter_900Black,
    ...FontAwesome.font,
  });

  
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
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
      }
    : { flex: 1 };

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={containerStyle}>
        <View style={phoneFrameStyle}>
          <View style={contentStyle}>
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="lesson" options={{ headerShown: false }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            </Stack>
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  largeScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DEDEDE',
  },
  smallScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  phoneFrame: {
    overflow: 'hidden',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenFrame: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
});
