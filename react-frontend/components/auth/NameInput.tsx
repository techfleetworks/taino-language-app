import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors'; 
import TextStyles from '@/constants/TextStyles'; 
import { useRouter } from 'expo-router';

type NameInputProps = {
  value: string;
  placeholder?: string;
  placeholderTextColor: string;
  onChangeText: (text: string) => void;
};

//TODO: update this so that it better matches the design prototype
export default function NameInput(props: NameInputProps) {

  const {
    value,
    placeholder = 'Write your name',
    placeholderTextColor = Colors.onBackground.mediumEmphasis,
    onChangeText,
  } = props;

  const [isButtonEnabled, setButtonEnabled] = useState<boolean>(false);

  const router = useRouter();

  const handleNameInput = (text: string) => {
    onChangeText(text);
    setButtonEnabled(text.length >= 2); // Enable Continue button if name is at least 2 characters
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.heading1, { color: Colors.onBackground.highEmphasis }]}>
            Let’s put these new skills to use!
          </Text>

          <Text style={[styles.button1, { color: Colors.onBackground.highEmphasis }]}>
            Tau, dak’anulia...
          </Text>

          <Text style={[styles.body, { color: Colors.onBackground.highEmphasis }]}>
            Hello, my name is...
          </Text>
        </View>

        <View style={styles.inputContainer}>
          {/* // TODO: fix this. The handleNameInput event is not being called */}
          <TextInput
            style={[styles.body, { color: Colors.onBackground.mediumEmphasis }]}
            value={value}
            onChangeText={handleNameInput}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
          />
          <View style={styles.divider}></View>
        </View>

        {/* //TODO: update this so that it's using the TLPBottomButtonNav and StyledButton components */}
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isButtonEnabled ? Colors.onPrimary.highEmphasis : Colors.onBackground.disabled },
          ]}
          onPress={() => router.push('/onboarding/create-account')}
          disabled={!isButtonEnabled}
        >
          <Text style = {styles.button2}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: '100%',
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column', 
  },
  innerContainer: {
    width: '100%', 
    flex: 1, 
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20, 
  },
  textContainer: {
    width: 326,
    marginBottom: 20,
  },
  inputContainer: {
    width: 326,
    height: 43,
    position: 'relative',
    marginBottom: 20, 
  },
  divider: {
    width: 326,
    height: 2,
    backgroundColor: '#212121', //TODO: remove any hardcoded colors. use the colors constants
    marginTop: 10,
  },
  button: {
    width: '100%', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#737373', //TODO: remove any hardcoded colors. use the colors constants
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
  },
  body: {
    color: 'black', //TODO: remove any hardcoded colors. use the colors constants
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: 28,
  },
  button2: {
    color: 'black', //TODO: remove any hardcoded colors. use the colors constants
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  button1: {
    fontSize: 20, //TODO: remove any hardcoded font sizes. use the text styles constants
    fontFamily: 'Inter',
    fontWeight: '600',
  },
  heading1: {
    color: 'black', //TODO: remove any hardcoded colors. use the colors constants
    fontSize: 32,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
});
