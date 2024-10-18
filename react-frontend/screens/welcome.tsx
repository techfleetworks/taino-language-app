/**
 * first Initial onboarding screen after splashscreen
 * @returns {JSX.Element}
 * @function
 */
import {Text, 
        SafeAreaView, 
        StyleSheet, 
        View, 
        Image,
        FlexStyle} from 'react-native';
import {useState} from 'react';
import StyledButton from '../components/TLPButton';
import ProgressStep from '@/components/ProgressStep';

type displayflex = FlexStyle['display']



export default function Welcome(): JSX.Element {
  const [displayFlex, setDisplayFlex] = useState<string>('flex');
  const [displayNone, setDisplayNone] = useState<string>('none');

  const [introText, setIntroText] = useState<boolean>(true);

  const onPress = () => setIntroText(false); 
  const icon = false;

  setTimeout(() => setDisplayFlex('none'), 5000);
  setTimeout(() => setDisplayNone('flex'), 5000);

  return (
    <View style={styles.welcomeContainer}>
    <View style={[styles.progressWrapper, {display:displayNone as displayflex}]}>
    <ProgressStep onPress={() => setIntroText(true)} />
    </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/humming_bird.png')} />
      </View>

      <View style={[styles.welcomeTextWrapper, {display:displayFlex as displayflex}]}>
        <Text style={styles.welcomeText}>
          Mabríka! 
        </Text>
        <Text style={styles.welcomeText}>
          Welcome to Learn Taíno! 
        </Text>
      </View>

      <View style={[styles.introTextWrapper, {display:displayNone as displayflex}]} >

        {introText ?
        <Text style={styles.introText}>
        Whether you are looking to reconnect with your Taíno ancestry or are curious about Taíno culture, I Welcome you to join me here at Learn Taíno!
        </Text> 
        :
        <Text style={styles.introText}>
        Before we start our Taíno learning journey, let’s take a moment to learn about the history of the  Taíno language.
        </Text>}
      </View>

      <View style={[styles.buttonWrapper, {display:displayNone as displayflex}]}>
        <StyledButton   
        title={introText ? 'Let’s get started!' : 'Continue'}
        titleColor={'#101828'}
        titleSize={16}
        backgroundColor={'#475467'}
        width= {294}
        height={48}
        accessibilityLabel={'Button'}
        onPress= {() => setIntroText(false)}
        icon={false}
        buttonText={styles.buttonText}
        otherProps={styles.buttonNav} />
      </View>

      
    </View>
  );
}

    // title={'Continue'}
    // titleColor={'#101828'}
    // titleSize={30}
    // backgroundColor={'#475467'}
    // width= {390}
    // accessibilityLabel={'Button'}

    // {title:'Continue', titleColor:'#101828', titleSize:30, backgroundColor:'#475467', width:390, accessibilityLabel:'Button'}



  
  
const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  progressWrapper: {
    top: 0,
  },
  imageContainer: {
    display: 'flex',
    position: 'relative',
    paddingTop: 192,
    // paddingLeft: 80,
    paddingBottom: 144,
    // paddingRight: 80,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  image: {
      width: 133.598,
      height: 128,
  },
  welcomeTextWrapper: {
    flexDirection: 'column',
    width: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: 'center',

    gap: 0,
    flex: 1,
    alignSelf: 'stretch',
  },
  welcomeText: {
    color:  '#101828',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 44, /* 122.222% */
    letterSpacing: -0.72,
  },
  introTextWrapper: {
    display: 'flex',
    width: 326,
    height: 142,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
  },
  introText: {
    color: '#475467',
    /* Text lg/Regular */
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28, /* 155.556% */
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
  buttonWrapper: {
    display: 'flex',
    width: 'auto',
    paddingVertical: 48,
    paddingHorizontal: 32,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
  },
});
  






  



      

    
