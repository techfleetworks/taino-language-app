import Colors from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useForm, Controller } from 'react-hook-form';
import { TLPBottomButtonNav } from '@/components/common/TLPBottomButtonNav';
import PageContainer from '@/components/common/PageContainer';
import axios from 'axios';

export function SignUpWithEmailForm() {

    const { control, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
          email: "",
          password: "",
          confirmPassword: ""
        }
      });
      
      const [passwordVisibility, setPasswordVisibility] = useState(false);
      const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(false);
      const [emailError, setEmailError] = useState<string>('');
      const [passwordError, setPasswordError] = useState<string>('');
      const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
      const [signupError, setSignupError] = useState<boolean>(true);
      const [isDisabled, setIsDisabled] = useState<boolean>(true);
    
      const onSubmit = async (data: any) => {
        const { email, password } = data;
    
    
        try {
          const response = await axios.post(`https://${process.env.EXPO_PUBLIC_AUTH0_DOMAIN}/dbconnections/signup`, {
            email,
            password,
            connection: 'Username-Password-Authentication'
          });
    
          if(response.status == 200) {
            window.location.href = '/onboarding/welcome'; // Redirect in the same tab
          }
    
        console.log(response.data)
          
        } catch (error) {
          console.log('Signup failed: ' + error);
        }
      };
    
      const checkForErrors = () => {
        const password = watch('password');
        const confirmPassword = watch('confirmPassword');
        
        if (passwordError || confirmPasswordError) {
          setIsDisabled(true);
        } else {
          setIsDisabled(false);
        }
      };
    
      useEffect(() => {
        checkForErrors();
      }, [watch()]);

    return (
        <PageContainer style={styles.container}>
          <View>
            <Text style={styles.label}>Email</Text>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address'
                }
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              )}
            />
    
            <Text style={styles.label}>Password</Text>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              rules={{
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters' },
                validate: value => {
                  const hasUpperCase = /[A-Z]/.test(value);
                  const hasLowerCase = /[a-z]/.test(value);
                  const hasNumbers = /\d/.test(value);
                  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(value);
                  
                  if (!hasUpperCase) return 'Password must have at least one uppercase letter';
                  if (!hasLowerCase) return 'Password must have at least one lowercase letter';
                  if (!hasNumbers) return 'Password must have at least one number';
                  if (!hasSpecialChars) return 'Password must have at least one special character';
                  return true; // If all validations pass
                }
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    style={styles.input}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry={!passwordVisibility}
                  />
                  <TouchableOpacity onPress={() => setPasswordVisibility(!passwordVisibility)} style={styles.iconContainer}>
                    <Icon name={passwordVisibility ? 'visibility' : 'visibility-off'}
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
    
            <Text style={styles.label}>Re-enter Password</Text>
            <Controller
              control={control}
              name="confirmPassword"
              defaultValue=""
              rules={{ required: 'Confirm Password is required', validate: value => value === watch('password') || 'Passwords do not match' }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    style={styles.input}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    secureTextEntry={!confirmPasswordVisibility}
                  />
    
                    <TouchableOpacity onPress={() => setConfirmPasswordVisibility(!confirmPasswordVisibility)} style={styles.iconContainer}>
                      <Icon name={confirmPasswordVisibility ? 'visibility' : 'visibility-off'}
                        size={24}
                        color="gray"
                      />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
    
          <View style={styles.flexGrow}>
            <Text style={styles.passwordText}>Password must be 8-16 characters long, and contain one upper case and one lowercase character.</Text>
          </View>
          <TLPBottomButtonNav>
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              disabled={isDisabled}
              style={[styles.btn, isDisabled ? styles.buttonDisabled : styles.buttonEnabled]}
              accessibilityLabel="Continue">
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </TLPBottomButtonNav>
        </PageContainer>
      )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: Colors.background,
      paddingTop: 60
    },
    flexGrow: {
      flex: 1,
    },
    label: {
      alignSelf: 'flex-start',
      fontFamily: 'Inter',
      fontSize: 16,
      color: Colors.onBackground.highEmphasis,
      fontWeight: '600',
      marginBottom: 10,
      // marginLeft: 48,
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
      color: Colors.onBackground.highEmphasis
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
    }
  });