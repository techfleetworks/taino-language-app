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
  const maxWidth = Math.min(width * 0.9, 390);
  const maxHeight = Math.min(height * 0.9, 844);

  let frameWidth = maxWidth;
  let frameHeight = frameWidth / aspectRatio;

  if (frameHeight > maxHeight) {
    frameHeight = maxHeight;
    frameWidth = frameHeight * aspectRatio;
  }

  const scaleFactor = frameWidth / 390;

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
    backgroundColor: '#DEDEDE', // Light gray background for larger screens
  },
  smallScreenContainer: {
    flex: 1,
    backgroundColor: 'transparent', // Transparent background for smaller screens
  },
  phoneFrame: {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenFrame: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
});
