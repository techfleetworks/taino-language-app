import React, { useEffect } from 'react';
import {Text, 
        SafeAreaView,
        StyleSheet, 
        View, 
        Image,
        FlexStyle
} from 'react-native';
import {useState} from 'react';
import StyledButton from '@/components/TLPButton';
import Result from '@/components/TLPResult';
import CorrectImageOption from '@/components/CorrectImageOption';
import TextStyle from '@/constants/Text';
import { TLPBottomButtonNav } from './TLPBottomButtonNav';
import Colors from '@/constants/Colors';
type displayflex = FlexStyle['display']

const currentLangIndex = 0;

// TODO: fix any type
export default function CorrectImageQuestionSlide({ question, options, correctIndex }: any): JSX.Element {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [displayFlex, setDisplayFlex] = useState<string>('flex');
  const [displayNone, setDisplayNone] = useState<string>('none');
  const [ currentSlide, setCurrentSlide ] = useState<number>(0);  
  const [introText, setIntroText] = useState<boolean>(true);
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

  console.log('options', options);
  const handleSubmit = () => {
    let correctOption = correctIndex;
    let optionResult = selectedOptionIndex === correctOption;

    console.log('correctOption', correctOption);
    console.log('optionResult', optionResult);

    setResult(optionResult);
    setShowResult(true);
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
        </View>
        <Text style={styles.questionText}>{question}</Text>
      </View>

      <View style={styles.answersContainer}>
        {options && options.map((option: any, index: number) => (
          <View key={index} style={styles.optionWrapper}>
            <CorrectImageOption
              userTranslation={option.user_translations?.[currentLangIndex] || option.user_translations || ''}
              image={option.image}
              index={index}
              isSelected={selectedOptionIndex === index}
              onPress={() => handleOptionSelect(index)}
              disabled={showResult}
            />
          </View>
        ))}
      </View>

      {showResult && (
          <Result selectionResult={result}/>
        )}

      <TLPBottomButtonNav style={{paddingHorizontal: 0}}>
        {/* TODO: change the button text to 'try again' if the user got it wrong and change the background color to the error variant */}
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
    fontSize: parseInt(TextStyle.body.fontSize, 10),
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
    fontSize: parseInt(TextStyle.heading2.fontSize, 10),
    fontWeight: '700', 
  },
  questionText: {
    fontSize: parseInt(TextStyle.heading2.fontSize, 10),
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
