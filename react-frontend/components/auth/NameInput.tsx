import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors'; 
import TextStyles from '@/constants/TextStyles'; 
import { useRouter } from 'expo-router';
import { Control, Controller, useForm } from 'react-hook-form'


interface NameInputProps {
  control: Control<{ name: string }>; // Ensure this matches the expected type
}

export default function NameInput({ control } : { control : Control<{name: string}> }) {

  return (
      <View style={styles.innerContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.heading1, { color: Colors.onBackground.highEmphasis }]}>
            Let’s put these new skills to use!
          </Text>

          <Text style={[styles.tainoTranslation, { color: Colors.onBackground.highEmphasis }]}>
            Tau, dak’anulia...
          </Text>

          <Text style={[styles.englishTranslation, { color: Colors.onBackground.mediumEmphasis }]}>
            Hello, my name is...
          </Text>
        </View>

        <View style={styles.inputContainer}>
            <Controller
                control={control}
                name="name"
                render={({ field: { onBlur, onChange, value } }) => (
                    <TextInput
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        placeholder="Write your name"
                    />
                )}
            />
            <View style={styles.divider} />
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
    marginBottom: 90,
  },
  inputContainer: {
    width: 326,
    height: 44,
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
  englishTranslation: {
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
  tainoTranslation: {
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
