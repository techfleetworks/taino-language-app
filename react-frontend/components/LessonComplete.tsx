import React, { useEffect } from 'react';
import {
    Image,
    Text,
    StyleSheet, 
    View,
} from 'react-native';
import {useState} from 'react';
import StyledButton from '@/components/TLPButton';
import { TLPBottomButtonNav } from './TLPBottomButtonNav';
import Vocabulary from './Vocabulary';
import { useRouter } from 'expo-router';
import { mockData } from '@/mock-data';
import Colors from '@/constants/Colors';


const router = useRouter();

interface LessonCompleteProps {
    lessonId: string
}

const fetchVocabByLesson = (lessonId: string) => {
    const lesson = mockData.lessons.find((lesson) => lesson.id === lessonId);
    const vocabSlide = lesson?.slides.find((slide) => slide.type === "vocab");
    return vocabSlide?.vocab || [];
}

const handleClick = () => {
    router.push('/lesson');
    return;
}


export default function LessonComplete({lessonId}: LessonCompleteProps) {
    const vocabulary = fetchVocabByLesson(lessonId) 

    return (
        <>
            <View style={styles.vocabWrapper}>
                <View style={styles.completeTextContainer}>
                    <Text style={styles.completeText}>Lesson Complete!</Text>
                    <Text style={styles.completeText}>Great Job!</Text>
                </View>
                <Image
                    source={require('../assets/icons/emoji_party_popper.png')}
                    style={styles.image}
                />
            </View>   
                <Text style={styles.vocabLearnedText}>Vocabulary learned:</Text>
                <View style={styles.vocabularyContainer}>
                    {vocabulary.map((pair) => (
                        <Vocabulary
                            key={pair.id}
                            taino={pair.taino}
                            english={pair.english}
                        />
                    ))} 
                </View>

            <TLPBottomButtonNav style={styles.buttonWrapper}>
                <StyledButton
                    title={'Continue'}
                    titleSize={16}
                    height={48}
                    accessibilityLabel={'Continue'}
                    onPress={handleClick}
                    icon={false}
                    buttonText={styles.buttonText}
                    otherProps={styles.buttonNav}
                    disabled={false}
                    zIndex={1}
                    position={'relative'}
                    backgroundColor={Colors.primary}
                />
            </TLPBottomButtonNav>
        </>
    )
}


const styles = StyleSheet.create({
    vocabWrapper: {
        display: 'flex',
        fontFamily: 'Inter',
        flexDirection: 'column',
        alignItems: 'center'
    },
    vocabularyContainer: {
        marginBottom: 40,
    },
    completeTextContainer: {
        marginBottom: 29,
        marginTop: 77,
    },
    completeText: {
        fontSize: 32,
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'center',
    },
    vocabLearnedText: {
        marginBottom: 13,
        fontSize: 24,
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'left',
        paddingLeft: 16,
    },
    image: {
        width: 128,
        height: 128,
        marginBottom: 74,
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
});