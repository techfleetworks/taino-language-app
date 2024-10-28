/**
 * simple progress indicator
 * @param {any} props - identification of screen
 * @returns {JSX.Element}
 * @function
 */

import React,{useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

type ProgressStepProps = {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressStep({ currentStep, totalSteps }: ProgressStepProps): JSX.Element {
  const step = [];
  const stepWidth = 100 / totalSteps;

  for (var i = 1; i <= currentStep; i++) {
    // @ts-ignore
    step.push(
      <Image 
        source={require('@/assets/images/step_gray.png')} 
        style={{ width: `${stepWidth}%` }}
      />
    );
  }
  for (var j = currentStep + 1; j <= totalSteps; j++) {
    // @ts-ignore
    step.push(
      <Image 
        source={require('@/assets/images/step_white.png')} 
        style={{ width: `${stepWidth}%` }}
      />
    );
  }

  const [fill, setFIll] = useState<boolean>(false);

  return (
    <View style={styles.progressContainer}>
      <View style={styles.arrowWrapper}>
        <Image
          style={styles.arrow}
          source={require('@/assets/images/arrow_back_ios_new.png')}
        />
      </View>
      <View style={styles.stepContainer}>
        {step}
      </View>
    </View>     

   
  );
}

// <Image source={fill ? require('../assets/step_white.png') : require('../assets/step_gray.png') } />
// <Image source={fill ? require('../assets/step_white.png') : require('../assets/step_gray.png') } />
// <Image source={fill ? require('../assets/step_white.png') : require('../assets/step_gray.png') } />
// <Image source={fill ? require('../assets/step_white.png') : require('../assets/step_gray.png') } />
// <Image source={fill ? require('../assets/step_white.png') : require('../assets/step_gray.png') } />

const styles = StyleSheet.create({
  progressContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 390,
    paddingTop: 16,
    paddingRight: 4,
    paddingBottom: 16,
    paddingLeft: 4,
    alignItems: 'center',
  },
  arrowWrapper: {
    display: 'flex',
    paddingRight: 12,
    alignItems: 'center',
    gap: 16,
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
    gap: 0,
    flex: 1,
  },
});
