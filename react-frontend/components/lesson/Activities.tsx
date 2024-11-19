import React, { useEffect } from 'react';
import {Text, 
        SafeAreaView,
        StyleSheet, 
        View, 
        Image,
        FlexStyle
} from 'react-native';
import {useState} from 'react';
import StyledButton from '@/components/common/TLPButton';
import ProgressStep from '@/components/lesson/ProgressStep';
import Colors from '@/constants/Colors';
import { TLPBottomButtonNav } from '@/components/common/TLPBottomButtonNav';
import Result from '@/components/lesson/TLPResult';
import MultipleChoiceOption from '@/components/lesson/MultipleChoiceOption';
import { LessonActivity } from '@/types/lessons';

type displayflex = FlexStyle['display']
interface ActivityProps {
    activities: LessonActivity[];
    handleOptionSelect: (id: string) => void;
}
/**
 * Renders the activities for the lesson
 * Will show one activity/card at a time based on the current activity index
 * and will render the activity based on the category of the activity
 * @param activities - the array of activities/cards for the lesson
 * @param handleOptionSelect - the function to handle the selection of the multiple choice option
 * @returns 
 */
export default function Activities({ activities, handleOptionSelect }: { 
    activities: LessonActivity[], 
    handleOptionSelect: (id: string) => void }
): JSX.Element {
  const [displayFlex, setDisplayFlex] = useState<string>('flex');
  const [displayNone, setDisplayNone] = useState<string>('none');
  const [ currentActivity, setCurrentActivity ] = useState<number>(0);  
  const [introText, setIntroText] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [result, setResult] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false)
  

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const onPress = () => setIntroText(false); 

  const handleIsIntroText = () => {

    return activities[currentActivity + 1]?.category === 'introduction' ? true : false;
  }

  const handleClick = () => setCurrentActivity(prev => prev + 1);


  const handleSubmit = () => {
    let correctOption = activities[currentActivity].correctIndex;
    let optionResult = selectedOption === correctOption;

    setResult(optionResult);
    setShowResult(true);
  }

  setTimeout(() => setDisplayFlex('none'), 5000);
  setTimeout(() => setDisplayNone('flex'), 5000);
  return (
    <View style={activities.length > 0 && activities[currentActivity]?.category === 'introduction' ? styles.welcomeContainer : styles.questionContainer}>
      <View style={[styles.progressWrapper, {display:displayNone as displayflex}]}>
        {/* ProgressStep: not visible on intro text */}
        {activities.length > 0 && activities[currentActivity]?.category !== 'introduction' && (
          <ProgressStep currentStep={currentActivity} totalSteps={activities.length} />
        )}
      </View>

       {activities.length > 0 && activities[currentActivity]?.category === 'introduction' && <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('@/assets/humming_bird.png')} />
        </View>}

        <View style={[styles.welcomeTextWrapper, {display:displayFlex as displayflex}]}>
          <Text style={styles.welcomeText}>
            Mabríka! 
          </Text>
          <Text style={styles.welcomeText}>
            Welcome to Learn Taíno! 
          </Text>
        </View>


      {/* Intro text: not visible on non-intro text */}
      {activities.length > 0 && activities[currentActivity]?.category === 'introduction' && (
        <>
        <View style={[styles.introTextWrapper, {display:displayNone as displayflex}]}>
          <Text style={styles.introText}>
              {activities[currentActivity].text}
            </Text> 
        </View>
        </>
      )}

      {/* Assessment card */}
      {activities.length > 0 && activities[currentActivity]?.category === 'assessment' && (
        <>
        <View style={styles.textWrapper}>
            <Text style={styles.text}>{activities[currentActivity].question}</Text>
        </View>

        {/* TODO: remove and replace the index params witth actual id */}
        <View style={styles.answersContainer}>
        {activities[currentActivity]?.options && activities[currentActivity].options.map((option: any, index: any) => (
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

    {activities.length > 0 && activities[currentActivity]?.category === 'introduction' && (
        <TLPBottomButtonNav style={{display:displayNone as displayflex}}>

        <StyledButton
        title={handleIsIntroText() ? 'Continue' : 'Let’s get started!'}
        titleSize={16}
        height={48}
        accessibilityLabel={'Button'}
        onPress= {handleClick}
        icon={false}
        buttonText={styles.buttonText}
        otherProps={styles.buttonNav} 
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
    backgroundColor: Colors.background,
    padding: 8,
  },
  questionContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.background,
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
  introTextWrapper: {
    display: 'flex',
    width: 326,
    height: 142,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
  },
  introText: {
    // color: '#475467',
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
