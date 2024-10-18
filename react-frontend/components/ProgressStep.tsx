/**
 * simple progress indicator
 * @param {any} props - identification of screen
 * @returns {JSX.Element}
 * @function
 */

import {useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

// type id = number;
export default function ProgressStep(props: any): JSX.Element {
  const step = [];

  for (var i = 2; i <= props.id; i++) {
    // @ts-ignore
    step.push(<Image source={require('../assets/step_gray.png')} />);
  }
  for (var j = props.id; j <= 6; j++) {
    // @ts-ignore
    step.push(<Image source={require('../assets/step_white.png')} />);
  }

  const [fill, setFIll] = useState<boolean>(false);

  return (
    <View style={styles.progressContainer}>
      <View style={styles.arrowWrapper}>
        <Image
          style={styles.arrow}
          source={require('../assets/arrow_back_ios_new.png')}
        />
      </View>
      <View style={styles.stepContainer}>
        <Image source={require('../assets/step_gray.png')} />
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
    paddingVertical: 0,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 0,
    flex: 1,
  },
});
