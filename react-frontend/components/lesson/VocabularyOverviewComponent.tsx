import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image'
import Vocabulary from './Vocabulary';
import StyledButton from '@/components/common/TLPButton';
import { TLPBottomButtonNav } from '@/components/common/TLPBottomButtonNav';
import Colors from '@/constants/Colors';
import { useLessonModule } from '@/lib/LessonModuleProvider';

// interface VocabOverviewProps {
//     phrase?: { id: string, taino: string, english: string };
//     vocab?: { id: string, taino: string, english: string }[];
// }

export default function VocabularyOverviewComponent() {

    const { lesson, advanceLesson } = useLessonModule();
    // require('@/assets/images/emoji_waving_hand.png')
    return (    
        <View>
            <View style={styles.vocabWrapper}>
                <View style={styles.VocabularOverviewTextContainer}>
                    <Text style={styles.headingText}>Vocabulary Overview</Text>
                </View>
                <Image
                    source={lesson?.thumbnail}
                    style={styles.subjectImage}
                />
                <View>
                    <Text style={styles.tainoPhrase}>{lesson?.introduction.phrase.taino}...</Text>
                    <Text style={styles.englishPhrase}>{lesson?.introduction.phrase.english}...</Text>
                </View>
            </View>

            <View style={styles.vocabularyContainer}>
                {lesson?.introduction.vocab_overview.map((pair) => (
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
                    onPress={advanceLesson}
                    icon={false}
                    buttonText={styles.buttonText}
                    otherProps={styles.buttonNav}
                    disabled={false}
                    zIndex={1}
                    position={'relative'}
                    backgroundColor={Colors.primary}
                />
            </TLPBottomButtonNav>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.background,
        position: 'relative',
        justifyContent: 'space-between'
    },
    vocabWrapper: {
        display: 'flex',
        fontFamily: 'Inter',
        flexDirection: 'column',
        alignItems: 'center'
    },
    vocabularyContainer: {
        marginBottom: 100,
    },
    VocabularOverviewTextContainer: {
        marginBottom: 40,
        marginTop: 21,
    },
    phraseContainer: {
        alignItems: 'center',
    },
    headingText: {
        marginBottom: 13,
        fontSize: 32,
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'left',
        paddingLeft: 16,
    },
    tainoPhrase: {
        width: '100%',
        height: 28,
        fontSize: 24,
        fontWeight: '400',
        fontStyle: 'normal',
        fontFamily: 'Inter',
        textAlign: 'center',
        marginBottom: 16,
    },
    englishPhrase: {
        width: '100%',
        height: 28,
        fontSize: 24,
        fontWeight: '400',
        fontStyle: 'normal',
        fontFamily: 'Inter',
        textAlign: 'center',
        marginBottom: 34,
    },
    subjectImage: {
        paddingTop: 40,
        marginBottom: 36,
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
        paddingVertical: 32,
        paddingHorizontal: 32,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
    }
});