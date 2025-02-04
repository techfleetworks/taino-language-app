import React, { useEffect } from 'react';
import {Text, 
        StyleSheet, 
        View, 
} from 'react-native';
import {useState} from 'react';
import StyledButton from '@/components/common/TLPButton';
import Result from '@/components/lesson/TLPResult';
import CorrectImageOption from '@/components/lesson/CorrectImageOption';
import TextStyle from '@/constants/TextStyles';
import { TLPBottomButtonNav } from '../common/TLPBottomButtonNav';
import Colors from '@/constants/Colors';
import { Activity } from '@/types/lessons';

// 0 = english, 1 = spanish
const currentLangIndex = 0;

type CorrectImageActivityProps = {
  activity: Activity;
  currentActivity: number;
  setCurrentActivity: (activity: number) => void;
  onComplete?: () => void;
  length: number;
}

export default function CorrectImageActivity({ 
  activity,
  currentActivity, 
  setCurrentActivity, 
  length, 
  onComplete 
}: CorrectImageActivityProps): JSX.Element {

  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [result, setResult] = useState<boolean | null>(null);

  const handleOptionSelect = (index: number) => {
    setSelectedOptionIndex(index);
    setIsDisabled(false);
  }

  const reset = () => {
    setSelectedOptionIndex(null);
    setIsDisabled(true);
    setShowResult(false);
    setResult(null);
  }

  const handleSubmit = () => {
    let correctOption = activity?.correctIndex;
    let optionResult = selectedOptionIndex === correctOption;

    setResult(optionResult);
    setShowResult(true);

    //if the user got the correct answer, when they press continue again, go to the next activity
    if (optionResult && showResult) {
      setCurrentActivity(currentActivity + 1);  
      reset();

    //if user is at the end and got the correct answer, trigger completion
    if (currentActivity === length - 1 && optionResult) {
      if (onComplete) {
        onComplete();
      }
        return;
      }
    }
  }

  useEffect(() => {
    setIsDisabled(selectedOptionIndex === null);
  }, [selectedOptionIndex]);

  return (
    <>
      <View style={styles.textWrapper}>
       <View style={styles.vocabTextWrapper}>
          <Text style={styles.newVocabText}>New vocabulary</Text>
          <Text style={styles.promptText}>Select the correct image</Text>
          <Text style={styles.tainoWord}>
            {activity?.prompt}
          </Text>
        </View>
      </View>

      <View style={styles.answersContainer}>
        {activity?.options && activity?.options.map((option: any, index: number) => (
          <View key={index} style={styles.optionWrapper}>
            <CorrectImageOption
              userTranslation={option.user_translations?.[currentLangIndex] || option.user_translations || ''}
              image={option?.image}
              index={index}
              audio={option?.audio}
              isSelected={selectedOptionIndex === index}
              onPress={() => handleOptionSelect(index)}
              disabled={showResult}
              showResult={showResult}
              isCorrect={index === activity?.correctIndex}
            />
          </View>
        ))}
      </View>

      {showResult && (
        <Result selectionResult={result}/>
      )}

      <TLPBottomButtonNav style={{ paddingHorizontal: 0 }}>
        <StyledButton
          title={showResult && !result ? 'Try Again' : 'Continue'}
          titleSize={16}
          height={48}
          accessibilityLabel={'Button'}
          onPress={showResult && !result ? reset : handleSubmit}
          icon={false}
          buttonText={styles.buttonText}
          otherProps={styles.buttonNav}
          disabled={isDisabled}
          zIndex={1}
          position={'relative'}
          backgroundColor={showResult && !result ? Colors.error : Colors.primary}
        />

      </TLPBottomButtonNav>
    </>
  );
}

const styles = StyleSheet.create({
  newVocabText: {
    fontSize: TextStyle.body.fontSize,
    fontWeight: '700'
  },
  cardWrapper: {
    paddingHorizontal: 32,
    flexDirection: 'column',
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.background,
    padding: 8,
  },
  vocabTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  promptText: {
    fontSize: TextStyle.heading2.fontSize,
    fontWeight: '700', 
    paddingBottom: 20
  },
  tainoWord: {
    fontSize: TextStyle.heading2.fontSize,
    fontWeight: '700', 
    height: 50
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
    width: '100%',
    paddingTop: 26,
  },
  answersContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 32,
  },
  optionWrapper: {
    width: '45%', // Allows for 2 columns with some gap
  },
});
