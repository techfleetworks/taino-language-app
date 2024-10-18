/**
 * first welcoming screen 
 * @returns {JSX.Element}
 * @function
 */

import {View, Text, Image, StyleSheet} from 'react-native';
import ProgressStep from '../components/ProgressStep';
import StyledButton from '../components/TLPButton';




export default function OnboardIntro(): JSX.Element {

  return (
    <View style={styles.onboardIntroContainer}>
      <ProgressStep id={1}/>
      <View style={styles.centerGroup}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            The Taíno People
          </Text>
        </View>

        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={require('../assets/snack-icon.png')}/>
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.mainText}>
          The Taíno are an Indigenous people of the Americas and the original inhabitants of the Caribbean islands and parts of the southern U.S. 
          </Text>
          <Text style={styles.mainText}>
          Due to European colonization, which started with the first encounter in 1492, many Taíno people hid or were killed.
          </Text>
        </View>

      </View>
     

      <View style={styles.buttonWrapper}>
        <StyledButton   
        title={'Continue'}
        titleColor={'#101828'}
        titleSize={16}
        backgroundColor={'#475467'}
        width= {294}
        height={48}
        accessibilityLabel={'Button'}
        onPress= {() => {}}
        icon={false}
        buttonText={styles.buttonText}
        otherProps={styles.buttonNav} />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  onboardIntroContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  centerGroup: {
    display: 'flex',
    width: 390,
    paddingTop: 32,
    paddingRight: 32,
    paddingBottom: 0,
    paddingLeft: 32,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0,
  },
  textWrapper: {
    
  },
  imageWrapper: {
    paddingHorizontal: 32,
    paddingVertical: 64,
  },
  textGroup: {
    gap: 32,
  },
  mainText: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28, /* 175% */
  },
  text: {
    color: '#333',
    fontFamily: 'Inter',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 32, /* 75% */
  },
  image: { 
    width: 313,
    height: 129,
  },
  buttonWrapper: {
    display: 'flex',
    width: 294,
    paddingVertical: 48,
    paddingHorizontal: 32,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
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