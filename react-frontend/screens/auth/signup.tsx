import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import firebaseAuth from '../../TLP_Main_Server/controllers/firebase-auth';

/**
 * sign-up to the application
 * @param {string} email - email of user
 * @param {string} password - password of user
 * @param {string} fname - first name of user
 * @param {string} lname - last name of user
 * @param {string} pnumber - phone number of user
 * @returns {JSX.Element}
 * @function
 */

// uninstall some of the dependencies in package.json
// *** Dummy UI for login to test auth and possible template for login *** //
// use Themed.tsx and StyledText.tsx text: if it will be the same throughout the program or override properties

export default function signup(): JSX.Element {
  // redundant but I want to remind me of other way to implement type safety
  const firebase = new firebaseAuth({});

  const [fname, setFName] = useState<string>('');
  const [lname, setLName] = useState<string>('');
  const [pnumber, setPNumber] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(true);
  const [eyeIcon, setEyeIcon] = useState<boolean>(true);
  const [signupError, setSignupError] = useState<string>('');

  // password strength status check and prompt for user, no restriction
  const handlePasswordVisibility = () => {
    if (!passwordVisibility && !eyeIcon) {
      setPasswordVisibility(!passwordVisibility);
      setEyeIcon(false);
    } else if (passwordVisibility && eyeIcon) {
      setPasswordVisibility(passwordVisibility);
      setEyeIcon(true);
    }
  };

  // const auth = new AuthNative();

  const onSignup = async () => {
    try {
      if (email !== '' && password !== '') {
        await firebase
          .handleSignupFirebase(email, password)
          .then(user => {
            console.log(user);
          })
          .catch(error => {
            console.log('Firebase failed to produce user credentials.');
          });
      } else {
        // redirect to home screen?
      }
    } catch (error) {
      console.error('User Failed to Sign-in', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Image source={require('../assets/images/favicon.png')} />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            value={email}
            placeholder="First Name"
            placeholderTextColor="#AFAFAF"
            onChangeText={email => {
              return setFName(fname);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            value={password}
            placeholder="Last Name"
            placeholderTextColor="#AFAFAF"
            onChangeText={password => {
              return setLName(lname);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            value={password}
            placeholder="Phone Number"
            placeholderTextColor="#AFAFAF"
            onChangeText={password => {
              return setPNumber(pnumber);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            value={email}
            placeholder="Email"
            placeholderTextColor="#AFAFAF"
            onChangeText={email => {
              return setEmail(email);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            value={password}
            placeholder="Password"
            placeholderTextColor="#AFAFAF"
            onChangeText={password => {
              return setPassword(password);
            }}
          />
        </View>
        <View>
          <TouchableOpacity>
            <Button
              title="Sign Up"
              color="#f194ff"
              accessibilityLabel="signup button"
              onPress={onSignup}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Forget Password?</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rbga(0,0,32,0.5)',
  },
  inputText: {},
  inputView: {
    backgroundColor: 'red',
    margin: 8,
  },
});

// const Login = async () => {
//     <SafeAreaView style={styles.container}>
//     <TextInput style={styles.input} />
//     <TextInput style={styles.input} />
//   </SafeAreaView>
// }

// export default Login;

// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
