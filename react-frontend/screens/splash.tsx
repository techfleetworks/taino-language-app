import React, {useEffect, useRef} from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
  AppState,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Colors from '../constants/Colors';
import Login from './auth/login';

export function Splash() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark.color : Colors.light.color,
  };

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    if (appState.current.match(/active/)) {
      SplashScreen.show();
    } else if (appState.current.match(/inactive|background/)) {
      SplashScreen.hide();
    }
  }, []);

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  // for class component
  // componentDidMount() {
  //   SplashScreen.hide()
  // }

  return (
    <SafeAreaView style={[styles.containerSplash, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSplash: {
    flex: 1,
  },
});
