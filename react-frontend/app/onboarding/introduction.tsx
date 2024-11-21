import React, { useEffect, useRef } from 'react';
import {Text, 
        StyleSheet, 
        View, 
        Image,
        FlexStyle
} from 'react-native';
import {useState} from 'react';
import StyledButton from '@/components/common/TLPButton';
import Colors from '@/constants/Colors';
import { TLPBottomButtonNav } from '@/components/common/TLPBottomButtonNav';
import { mockData } from '@/mock-data';
import { LessonSlide } from '@/types/lessons';
import { useRouter } from 'expo-router';
import TextStyles from '@/constants/TextStyles';

//TODO: the first 4 slides are the introduction. You can separate them from the mock-data.js file and add them to their own array as they will probably always be static.

//TODO: then you can use that array to set the lessonSlides state. OR you can just replace this function with the new array.
const fetchLessonSlides = () => {
  return mockData.lessons[0].slides.slice(0, 4);
}

//An introduction to Learn Taíno's mascot, ZunZun

//TODO: Use the elements from this component to create a new reusable component ex: ZunZunConversation
export default function Introduction(): JSX.Element {
  // const [displayFlex, setDisplayFlex] = useState<string>('flex');
  // const [displayNone, setDisplayNone] = useState<string>('none');
  const [ currentSlide, setCurrentSlide ] = useState<number>(0);  
  const [introText, setIntroText] = useState<boolean>(true); 
  const buttonRef = useRef<any>(null);

  const router = useRouter();
  
  const [lessonSlides, setLessonSlides] = useState<LessonSlide[]>([
    {
      type: '', 
      text: '',
      options: []
    }
  ]);  
  
  const handleIsIntroText = () => {
    return lessonSlides[currentSlide + 1]?.category === 'introduction' ? true : false;
  }

  const handleClick = () => {
    const isIntroText = handleIsIntroText();
    
    if (!isIntroText) {  // If it's not intro text, it means we're showing "Let's get started!"
      router.push(`/onboarding/lesson-one`);
      return;
    }

    setCurrentSlide(prev => prev + 1);
  }

  useEffect(() => {
    const data = fetchLessonSlides();
    setLessonSlides(data.map(slide => ({
      ...slide,
      text: slide.text || ''
    })));
  }, []);

  return (
    <View style={[
      lessonSlides.length > 0 && lessonSlides[currentSlide]?.category === 'introduction' 
      && styles.welcomeContainer
    ]}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('@/assets/humming_bird.png')} />
        </View>

        <View style={[styles.introTextWrapper]}>
          <Text style={styles.introText}>
              {lessonSlides[currentSlide].text}
            </Text> 
        </View>
    
        <TLPBottomButtonNav>
          <StyledButton
          title={handleIsIntroText() ? 'Continue' : 'Let’s get started!'}
          titleSize={16}
          height={48}
          accessibilityLabel={'Button'}
          onPress= {handleClick}
          icon={false}
          buttonText={styles.buttonText}
          otherProps={{...styles.buttonNav, ref: buttonRef}} 
          zIndex={1}
          position={'relative'}
          />
        </TLPBottomButtonNav>
      
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 8,
  },
  progressWrapper: {
    top: 0,
  },
  imageContainer: {
    display: 'flex',
    position: 'relative',
    paddingTop: 192,
    paddingBottom: 144,
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    color:  Colors.black,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 44, /* 122.222% */
    letterSpacing: -0.72,
  },
 welcomeText2: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: TextStyles.heading2.fontSize,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  introTextWrapper: {
    display: 'flex',
    width: 352,
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    borderRadius: 8,
    backgroundColor: Colors.surface
  },
  introText: {
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
  textWrapper: {
    width: 326,
    paddingTop: 26,
    paddingHorizontal: 12,
  },
  text: {
    color: Colors.text.onSurface,
    fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "600",
  },
  answersContainer: {
    width: "100%",
    paddingHorizontal: 27,
    paddingTop: 75,
    paddingBottom: 92,
  },
});