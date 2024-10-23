import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ProgressStep from '@/components/ProgressStep';
import TLPButton from '@/components/TLPButton';
import Result from '@/components/TLPResult';
import Colors from '@/constants/Colors';

const mockData = {
    question: 'The Taíno are an Indigenous people of the Americas and the original inhabitants of _____.',
    options: ['Puerto Rico', 'The Dominican Republic', 'The Caribbean', 'The Caribbean & Southern US'],
    correctIndex: 3,
}

export default function IntroQuestion() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <View style={styles.questionContainer}>
      <ProgressStep id={2} />

      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          {mockData.question}
        </Text>
      </View>

      <View style={styles.radioGroupContainer}>
        {mockData.options.map((option, index) => (
          <Pressable
            key={index}
            style={[
              styles.radioButton,
              selectedOption === index && styles.radioButtonSelected
            ]}
            onPress={() => handleOptionSelect(index)}
          >
            <Text style={[
              styles.radioButtonText,
              selectedOption === index && styles.radioButtonTextSelected
            ]}>
              {option}
            </Text>
          </Pressable>
        ))}
      </View>
      <Result />
      <View style={styles.buttonWrapper}>
        <TLPButton
          title={'Continue'}
          titleColor={'#101828'}
          titleSize={16}
          backgroundColor={'#475467'}
          width={294}
          height={48}
          accessibilityLabel={'Continue'}
          onPress={() => {
            // Handle continue action
          }}
          icon={false}
          buttonText={styles.buttonText}
          otherProps={styles.buttonNav}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: Colors.background,
    padding: 8,
  },
  textWrapper: {
    width: 326,
    paddingTop: 26,
    paddingHorizontal: 12,
  },
  text: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  radioGroupContainer: {
    width: '100%',
    paddingHorizontal: 27,
    paddingTop: 75,
    paddingBottom: 92,
  },
  radioButton: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#D9D9D9',
    padding: 12,
    marginBottom: 10,
  },
  radioButtonSelected: {
    backgroundColor: '#475467',
  },
  radioButtonText: {
    color: '#101828',
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  radioButtonTextSelected: {
    color: '#FFFFFF',
  },
  buttonWrapper: {
    display: 'flex',
    width: 'auto',
    paddingVertical: 32,
    // paddingTop: 140,
    paddingHorizontal: 48,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  button: {
    borderRadius:  16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    backgroundColor:' #D9D9D9',
    padding: 12,
  },
  buttonNav: {
    display: 'flex',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    alignSelf: 'stretch',
    borderRadius: 8,
  },
  buttonText: {
    color: '#475467',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 1,
  },
})
