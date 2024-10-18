/**
 * modal to find feedback to user
 * @param {object} prop - containing boolean value to determine text
 * @returns {JSX.Element}
 * @function
 */
import {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';




export default function Result(props: object): JSX.Element {

  const [text, setText] = useState(true);

  return (
  <View style={styles.resultContainer}>
    <View style={styles.textGroup}>
      <Image style={styles.icon} source={text ? require('../assets/check.png') : require('../assets/cancel_light.png')} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{text ? 'Amazing!' : 'Oops!'} </Text>
      </View>
      <View style={styles.imageWrapper}>
      <Image style={styles.icon} source={require('../assets/ios_share.png')} />
      </View>
    </View>

  </View>
  )
}



const styles = StyleSheet.create({
  resultContainer: {
    position: 'absolute',
    bottom: 0,
    width: 390,
    height: 188,
    flexShrink: 0,
    backgroundColor: '#828282',

  },
  textGroup: {
    display: 'flex',
    height: 32,
    flexShrink: 0,
    flexDirection: 'row',
    paddingTop: 32,
    paddingRight: 48,
    paddingBottom: 0,
    paddingLeft: 48,
    alignItems: 'center',
    gap: 16,
  },
  icon: {
    width: 32,
    height: 32,
    flexShrink: 0,
    right: 0,
  },
  textWrapper: {
    display: 'flex',
    width: 128,
    height: 32,
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 0,
  },
  imageWrapper: {
    right: -72,
    // paddingLeft: 40,
  },
  text: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 10, /* 208.333% */
  },
})