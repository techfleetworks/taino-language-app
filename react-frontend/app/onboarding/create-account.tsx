import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router'; 
import { AuthContext } from '@/lib/AuthProvider';
import { useRouter } from 'expo-router';
import GoogleAuthButton from '@/components/auth/GoogleAuthButton';

export default function Onboarding() {
  const authContext = useContext(AuthContext);
  // const router = useRouter();
  
  const googleLogin = async () => {
    console.log('googleLogin');
    if (authContext) {
      const result = await authContext.login();
      console.log('result', result);
      if (result.type === 'success') {
        console.log('redirecting to welcome');
        window.location.href = '/onboarding/welcome'; // Redirect in the same tab
      } else {
        console.log('login failed');
        Alert.alert('Login Failed!!!!!');
      }
    }
  };

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

      <Link href="/onboarding/signup" style={[styles.createAccountButton, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </Link>

      <View style={styles.orContainer}>
        <View style={styles.orLine} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.orLine} />
      </View>

      <GoogleAuthButton onPress={googleLogin} />
      {/* Removed apple button for now */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.onPrimary.highEmphasis,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  orLine: {
    width: 128,
    height: 1, 
    backgroundColor: Colors.onSurface.mediumEmphasis
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
    color: Colors.onSurface.mediumEmphasis,
    paddingHorizontal: 10,
    flex: 1,
    marginBottom: 15,
  },
  thirdPartyButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});