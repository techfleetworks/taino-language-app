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

const fetchLessonSlides = () => {
    return mockData.lessons[0].slides.slice(0, 4);
  }

export default function ZunZunDialog() {
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
      alignItems: 'center',
      gap: 16,
    },
    image: {
        width: 133.598,
        height: 128,
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
    text: {
      color: Colors.text.onSurface,
      fontFamily: "Inter",
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: "600",
    }
  });