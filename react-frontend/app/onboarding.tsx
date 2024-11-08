// app/onboarding.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

export default function Onboarding() {

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => console.log("Go back!")}
      >
        <Image 
          source={require('@/assets/images/arrow_back_ios_new.png')} 
          style={styles.backIcon} 
        />
      </TouchableOpacity>

      <Image source={require('@/assets/humming_bird.png')} style={styles.icon} />
      <Text style={styles.welcomeText}>Welcome Gabriela! </Text>
      <Text style={styles.subText}>Create an account to keep learning Taíno!</Text>

      <Link href="/signup" style={[styles.createAccountButton, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </Link>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.thirdPartyButtonText}>Sign up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton}>
        <Text style={styles.thirdPartyButtonText}>Sign up with Apple</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.onPrimary.highEmphasis,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: Colors.onSurface.mediumEmphasis,
    marginBottom: 20,
  },
  createAccountButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  createAccountButtonText: {
    color: Colors.onPrimary.highEmphasis,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 15,
  },
  googleButton: {
    backgroundColor: Colors.surface,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  appleButton: {
    backgroundColor: Colors.surface,
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  thirdPartyButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

