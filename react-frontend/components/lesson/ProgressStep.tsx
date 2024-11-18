/**
 * simple progress indicator
 * @param {any} props - identification of screen
 * @returns {JSX.Element}
 * @function
 */

import React,{useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';

type ProgressStepProps = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  totalSteps: number;
}

export default function ProgressStep({ currentStep, setCurrentStep, totalSteps }: ProgressStepProps) : JSX.Element {
  const router = useRouter();

  const stepWidth = 100 / totalSteps;

  const steps = Array.from({ length: totalSteps }, (_, index) => {
    const stepStyle = index < currentStep ? styles.stepGreen : styles.stepWhite;
    return (
      <View key={index} style={[styles.step, stepStyle, { width: `${stepWidth}%` }]}></View>
    );
  });

  const handleBack = () => {
    console.log('Back button pressed');
    console.log('Current step:', currentStep);

    if (currentStep > 0) {
      console.log('Decrementing step');
      setCurrentStep(currentStep - 1);
    } else {
      console.log('Navigating back');
      router.back();
    }
  }

  return (
    <View style={styles.progressContainer}>
      <Pressable onPress={handleBack} style={styles.arrowWrapper}>
        <Image
          style={styles.arrow}
          source={require('@/assets/images/arrow_back_ios_new.png')}
        />
      </Pressable>
      <View style={styles.stepContainer}>
        {steps}
      </View>
    </View>     
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 390,
    padding: 16,
    alignItems: 'center',
  },
  arrowWrapper: {
    display: 'flex',
    paddingRight: 12,
    alignItems: 'center',
  },
  arrow: {
    width: 24,
    height: 24,
  },
  stepContainer: {
    display: 'flex',
    height: 16,
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
    flex: 1,
  },
  step: {
    width: 16,
    height: 16,
    borderRadius: 16,
  },
  stepGreen: {
    backgroundColor: Colors.primary,
  },
  stepWhite: {
    backgroundColor: Colors.surfaceVariant,
  }
})