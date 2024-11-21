import Colors from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


/**
 * sign-up to the application
 * @param {string} email - email of user
 * @param {string} password - password of user
 * @param {string} confirmPassword - confirm password of user
 * @param {boolean} passwordVisibility - password eye icon
 * @param {boolean} confirmPasswordVisibility - confirm password eye icon
 * @param {string} emailError - error message for email
 * @param {string} passwordError - error message for password
 * @param {string} confirmPasswordError - error message for confirm password
 * @param {boolean} signupError - error message for signup
 * @param {boolean} isDisabled - disable button if there is an error
 * @returns {JSX.Element}
 * @function
 */


export default function SignupScreen(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
  const [signupError, setSignupError] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const minLength = 8;
    const maxLength = 16;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    return (
      password.length >= minLength &&
      password.length <= maxLength &&
      hasUpperCase &&
      hasLowerCase
    );
  };

  const checkForErrors = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = password === confirmPassword;

    if (!isEmailValid || !isPasswordValid || !isConfirmPasswordValid) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    checkForErrors();
  }, [email, password, confirmPassword]);

  const handleSignup = () => {
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Invalid email address');
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError('Password must be between 8 and 16 characters, contain at least one uppercase and one lowercase letter');
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
    setIsDisabled(false);

    Alert.alert('Congrats on signing up!');
    // store user data in DB
    // router.push('onboarding/welcome');
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.container}
    // >
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => {
          setEmail(text);
          if (validateEmail(text)) {
            setEmailError('');
          } else {
            setEmailError('Invalid email address');
          }
          checkForErrors();
        }}
      />
      <Text style={styles.label}>Password</Text>
      <View>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => {
            setPassword(text);
            if (text.length >= 8 && text.length <= 16) {
              setPasswordError('');
            } else {
              setPasswordError('Password must be 8-16 characters long, and contain one upper case and one lowercase character.');
            }
            checkForErrors();
          }}
          secureTextEntry={!passwordVisibility}
          maxLength={16}
        />
        <TouchableOpacity onPress={() => setPasswordVisibility(!passwordVisibility)} style={styles.iconContainer}>
          <Icon name={passwordVisibility ? 'visibility' : 'visibility-off'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Re-enter Password</Text>
      <View>
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={text => {
            setConfirmPassword(text);
            if (text === password) {
              setConfirmPasswordError('');
            } else {
              setConfirmPasswordError('Passwords do not match');
            }
            checkForErrors();
          }}
          secureTextEntry={!confirmPasswordVisibility}
        />
        <TouchableOpacity onPress={() => setConfirmPasswordVisibility(!confirmPasswordVisibility)} style={styles.iconContainer}>
          <Icon name={confirmPasswordVisibility ? 'visibility' : 'visibility-off'}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.passwordText}>Password must be 8-16 characters long, and contain one upper case and one lowercase character.</Text>

      {/* //TODO replace this with the TLPBottomButtonNav component */}
      <TouchableOpacity
        onPress={handleSignup}
        disabled={isDisabled}
        style={[styles.btn, isDisabled ? styles.buttonDisabled : styles.buttonEnabled]}
        accessibilityLabel="Continue">
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  label: {
    alignSelf: 'flex-start',
    fontFamily: 'Inter',
    fontSize: 16,
    color: Colors.onBackground.highEmphasis,
    fontWeight: '600',
    marginBottom: 4,
    marginLeft: 48,
  },
  input: {
    height: 64,
    width: 304,
    borderColor: Colors.onBackground.highEmphasis,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingRight: 40,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  btn: {
    width: 326,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 0,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 1,
    color: Colors.white,
  },
  buttonDisabled: {
    backgroundColor: Colors.onBackground.disabled,
  },
  buttonEnabled: {
    backgroundColor: Colors.primary,
  },
  passwordText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16.94,
    color: Colors.onBackground.mediumEmphasis,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 5,
    width: 304,
    height: 51,
  },

});