/**
 * first Initial onboarding screen after splashscreen
 * @returns {JSX.Element}
 * @function
 */
import React, { useEffect, useRef } from 'react';
import {Text, 
        StyleSheet, 
        View, 
        Image,
        FlexStyle
} from 'react-native';
import {useState} from 'react';
import StyledButton from '@/components/TLPButton';
import ProgressStep from '@/components/ProgressStep';
import Colors from '@/constants/Colors';
import { TLPBottomButtonNav } from '@/components/TLPBottomButtonNav';
import { mockData } from '@/mock-data';
import Result from '@/components/TLPResult';
import MultipleChoiceOption from '@/components/MultipleChoiceOption';
import { LessonSlide } from '@/types/lessons';
import { useRouter } from 'expo-router';
import TextStyles from '@/constants/TextStyles';

type displayflex = FlexStyle['display']

const fetchLessonSlides = () => {
  return mockData.lessons[0].slides.slice(1, 5);
}

export default function Welcome(): JSX.Element {
  const [displayFlex, setDisplayFlex] = useState<string>('flex');
  const [displayNone, setDisplayNone] = useState<string>('none');
  const [ currentSlide, setCurrentSlide ] = useState<number>(0);  
  const [introText, setIntroText] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [result, setResult] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false)
  const buttonRef = useRef<any>(null);

  const router = useRouter();
  
  const [lessonSlides, setLessonSlides] = useState<LessonSlide[]>([
    {
      type: '', 
      text: '',
      options: []
    }
  ]);  
  
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const onPress = () => setIntroText(false); 

  const handleIsIntroText = () => {
    return lessonSlides[currentSlide + 1]?.category === 'introduction' ? true : false;
    //return lessonSlides[currentSlide + 1]?.category === 'introduction' && lessonSlides[currentSlide + 1]?.order === 1 ? true : false;
  }

  const handleClick = () => {
    const isIntroText = handleIsIntroText();
    
    if (!isIntroText) {  // If it's not intro text, it means we're showing "Let's get started!"
      router.push('/lesson');
      return;
    }

    setCurrentSlide(prev => prev + 1);
  }

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    setIsDisabled(false);
  }

  const handleSubmit = () => {
    let correctOption = lessonSlides[currentSlide].correctIndex;
    let optionResult = selectedOption === correctOption;

    setResult(optionResult);
    setShowResult(true);
  }

  useEffect(() => {
    const data = fetchLessonSlides();
    setLessonSlides(data.map(slide => ({
      ...slide,
      text: slide.text || ''
    })));
  }, []);

  setTimeout(() => setDisplayFlex('none'), 5000);
  setTimeout(() => setDisplayNone('flex'), 5000);

  return (
    <View style={[
      lessonSlides.length > 0 && lessonSlides[currentSlide]?.category === 'introduction' 
        ? styles.welcomeContainer 
        : styles.questionContainer,
      { backgroundColor: displayFlex === 'flex' ? Colors.primary : Colors.background }
    ]}>
      <View style={[styles.progressWrapper, {display:displayNone as displayflex}]}>
        {/* ProgressStep: not visible on intro text */}
        {lessonSlides.length > 0 && lessonSlides[currentSlide]?.category !== 'introduction' && (
          <ProgressStep currentStep={currentSlide} totalSteps={2}/>
        )}
      </View>

       {lessonSlides.length > 0 && lessonSlides[currentSlide]?.category === 'introduction' && <View style={styles.imageContainer}>
          <Image style={styles.image} source={displayFlex === 'flex' ? require('@/assets/humming_bird_lg.png') : require('@/assets/humming_bird.png')} />
        </View>}

        <View style={[
          styles.welcomeTextWrapper, 
          {
            display: displayFlex as displayflex,
            backgroundColor: displayFlex === 'flex' ? Colors.primary : 'transparent'
          }
        ]}>
          <Text style={[
            styles.welcomeText,
            { color: displayFlex === 'flex' ? '#FFFFFF' : '#101828' }
          ]}>
            Mabríka! 
          </Text>
          <Text style={[
            styles.welcomeText2,
            { color: displayFlex === 'flex' ? '#FFFFFF' : '#101828' }
          ]}>
            Welcome to Learn Taíno! 
          </Text>
        </View>

      {/* Intro text: not visible on non-intro text */}
      {lessonSlides.length > 0 && lessonSlides[currentSlide]?.category === 'introduction' && (
        <>
        
        <View style={[styles.introTextWrapper, {display:displayNone as displayflex}]}>
          <Text style={styles.introText}>
              {lessonSlides[currentSlide].text}
            </Text> 
        </View>
        </>
      )}

      {/* Assessment card */}
      {lessonSlides.length > 0 && lessonSlides[currentSlide]?.category === 'assessment' && (
        <>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{lessonSlides[currentSlide].question}</Text>
        </View>
  
        {/* TODO: remove and replace the index params witth actual id */}
        <View style={styles.answersContainer}>
          {lessonSlides[currentSlide]?.options && lessonSlides[currentSlide].options.map((option: any, index: number) => (
            <MultipleChoiceOption
              key={index}
              option={option}
              isSelected={selectedOption === index}
              onPress={() => handleOptionSelect(index)}
            />
          ))}
        </View>
  
        <View style={styles.buttonWrapper}>
          <StyledButton
            title={"Submit"}
            titleSize={16}
            height={48}
            accessibilityLabel={"Submit"}
            disabled={isDisabled}
            onPress={handleSubmit}
            icon={false}
            buttonText={styles.buttonText}
            otherProps={styles.buttonNav}
          />
        </View>
        
        {showResult && (
          <Result selectionResult={result}/>
        )}
        </>
      )}

      {lessonSlides.length > 0 && lessonSlides[currentSlide]?.category === 'introduction' && (
        <TLPBottomButtonNav style={{display:displayNone as displayflex}}>

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
        //position={'absolute'}
        position={'relative'}
        />
      </TLPBottomButtonNav>
      )}
     
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
  // introTextWrapper: {
  //   display: 'flex',
  //   width: 326,
  //   height: 142,
  //   flexDirection: 'column',
  //   alignItems: 'flex-start',
  //   gap: 16,
  // },
 welcomeText2: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: TextStyles.heading2.fontSize,
    fontStyle: 'normal',
    fontWeight: '600',
    // lineHeight: TextStyles.heading2.lineHeight,
  },
  introTextWrapper: {
    display: 'flex',
    width: 352,
    paddingVertical: 24,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    borderRadius: 8,
    backgroundColor: '#DEDEDE'
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
   // width: 70%,
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