import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Colors from '@/constants/Colors';
import { useAuth } from '@/lib/AuthProvider';
import GoogleAuthButton from '@/components/auth/GoogleAuthButton';
import { useForm } from 'react-hook-form';
import PageContainer from '@/components/common/PageContainer';
import NameInput from '@/components/auth/NameInput';
import { TLPBottomButtonNav as BottomButtonNav } from '@/components/common/TLPBottomButtonNav';
import  { TLPButton as StyledButton } from '@/components/common/TLPButtonV2'
import { SignUpWithEmailForm } from '@/components/auth/SignUpWithEmailForm';


export default function CreateAccount() {
  
  const { user, login } = useAuth();
  const [ nameIsPresent, setNameIsPresent ] = useState<boolean>(false)
  const [ withEmail, setWithEmail ] = useState<boolean>(false);

  const { control, watch } = useForm({
      defaultValues: {
          name: "",
          email:"",
          password:"",
          confirmPassword: ""
      }
  })

  const submitName = () => {
      if (watch('name').trim() === "") {
          return;
      }

      setNameIsPresent(true)
  }

  const handleWithEmail = () => {
      setWithEmail(true);
      setNameIsPresent(false)
  }

  //registers/authenticates user 
  const googleLogin = async () => {
    if (login) {
      const result = await login();
      if (result.type === 'success') {
        window.location.href = '/onboarding/welcome'; // Redirect in the same tab
      } else {
        console.log('login failed'); //TODO: Replace with an error message that is displayed in form when auth fails.
      }
    }
  };

    if(nameIsPresent) {  
      return (
      <View style={styles.container}> 
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setNameIsPresent((prev : boolean) => !prev)}
        >
          <Image 
            source={require('@/assets/images/arrow_back_ios_new.png')} 
            style={styles.backIcon} 
          />
        </TouchableOpacity>

        <Image source={require('@/assets/humming_bird.png')} style={styles.icon} />
        <Text style={styles.welcomeText}>Welcome {watch('name')}! </Text>
        <Text style={styles.subText}>Create an account to keep learning Taíno!</Text>
        
        <TouchableOpacity onPress={handleWithEmail} style={[styles.createAccountButton, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.orLine} />
        </View>
        <GoogleAuthButton onPress={googleLogin} />
      </View>
    );}

    if(withEmail) {
      return (
        <>
        <TouchableOpacity
        style={styles.backButton}
        onPress={() => setNameIsPresent((prev : boolean) => !prev)}>
          <Image 
            source={require('@/assets/images/arrow_back_ios_new.png')} 
            style={styles.backIcon} 
          />
        </TouchableOpacity>
        <SignUpWithEmailForm />
        </>
      )
    }

    return (
      <PageContainer style={{ paddingTop: 48 }}>
        <NameInput 
            control={control}
        />
        <BottomButtonNav>
            <StyledButton 
                disabled={watch('name').trim() === ''}
                title={'Continue'}
                onPress={submitName}
                />
        </BottomButtonNav>
      </PageContainer>
    )
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
    color: Colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});