import {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ProgressStep from '../components/ProgressStep';
import StyledButton from '../components/TLPButton';
import Result from '../components/TLPResult';

export default function introQuestion() {

  const [backgroundColor, setBackgroundColor] = useState('#475467')

  return (
    <View style={styles.questionContainer}>
      <ProgressStep id={2} />

      <View style={styles.textWrapper}>
      <Text style={styles.text}>
        The Taíno are an Indigenous people of the Americas and the original inhabitants of _____.
      </Text>
      </View>

      <View style={styles.buttonContainer}>
      <StyledButton   
        title={'Puerto Rico'}
        titleColor={'#101828'}
        titleSize={16}
        backgroundColor={backgroundColor}
        width= {294}
        height={48}
        accessibilityLabel={'Button'}
        onPress= {() => {setBackgroundColor('#165700')}}
        icon={false} 
        buttonText={styles.buttonText}
        otherProps={styles.button} />
      <StyledButton   
        title={'The Dominican Republic'}
        titleColor={'#101828'}
        titleSize={16}
        backgroundColor={backgroundColor}
        width= {294}
        height={48}
        accessibilityLabel={'Button'}
        onPress= {() => {setBackgroundColor('#165700')}}
        icon={false}
        buttonText={styles.buttonText}
        otherProps={styles.button} />
      <StyledButton   
        title={'The Caribbean'}
        titleColor={'#101828'}
        titleSize={16}
        backgroundColor={backgroundColor}
        width= {294}
        height={48}
        accessibilityLabel={'Button'}
        onPress= {() => {setBackgroundColor('#165700')}}
        icon={false}
        buttonText={styles.buttonText}
        otherProps={styles.button} />
      <StyledButton   
        title={'The Caribbean & Southern US'}
        titleColor={'#101828'}
        titleSize={16}
        backgroundColor={backgroundColor}
        width= {294}
        height={48}
        accessibilityLabel={'Button'}
        onPress= {() => {setBackgroundColor('#165700')}}
        icon={false}
        buttonText={styles.buttonText}
        otherProps={styles.button} />
    
      </View>

      <Result />
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
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
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
    lineHeight: 1,
  },
  buttonContainer: {
    display: 'flex',
    // paddingVertical: 70,
    paddingTop: 75,
    paddingBottom: 92,
    paddingHorizontal: 27,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
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
