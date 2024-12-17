import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome!{'\n'}Mabríka!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.text.onPrimary,
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
});