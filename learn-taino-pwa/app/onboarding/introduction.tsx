import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Colors from '@/constants/Colors';
import ZunZunDialog from '@/components/common/ZunZunDialog';
import { useRouter } from 'expo-router';
import TextStyles from '@/constants/TextStyles';
import { useLessonModule } from '@/lib/LessonModuleProvider';

const onboardingIntroDialogues = [
    "Tau! Hello! I'm Zunzún, I’ll be your guide on your learning journey. \n\nI’m a hummingbird, known to be a messenger of Yaya, the Taíno Great Spirit.",
    'In the Taíno culture, Hummingbirds are sacred symbol of rebirth and bring new life into the world.',
    'Learn Taíno aims to help the revitalization of the Taíno by helping you learn all about the origins, culture, people and language.',
    'Ready to try your first lesson?'
]

//An introduction to Learn Taíno's mascot, ZunZun

export default function Introduction(): JSX.Element {

  const { handleLessonId } = useLessonModule();
  const [ index, setIndex ] = useState<number>(0);  

  const router = useRouter();

  const buttonText = () => {
    if(index === 0) return "Let's get started!"
    if(index == onboardingIntroDialogues.length -1) return "Let's go!"

    return;
  }

  
  const handleClick = () => {

    if (index === onboardingIntroDialogues.length - 1) {  // If it's not intro text, it means we're showing "Let's get started!"
      //set lesson id to lesson one
      handleLessonId("c3fdfe5f-9679-48a9-940c-3b86f0758e03"); // <-- lesson id from the Postgres database
      router.push(`/onboarding/lesson-one`);
      return;
    }

    setIndex(prev => prev + 1)
  }

  return (
    <ZunZunDialog text={onboardingIntroDialogues[index]} onButtonClick={handleClick} buttonText={buttonText()} />
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