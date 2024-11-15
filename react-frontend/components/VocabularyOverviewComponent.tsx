import { Text, View, Image, StyleSheet } from 'react-native';
import Vocabulary from './lesson/Vocabulary';
import { mockData } from '@/mock-data';
import StyledButton from '@/components/common/TLPButton';
import { TLPBottomButtonNav } from '@/components/common/TLPBottomButtonNav';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';

const router = useRouter();

interface VocabOverviewProps {
    lessonId: string
}

const fetchVocabByLesson = (lessonId: string) => {
    const lesson = mockData.lessons.find((lesson) => lesson.id === lessonId);
    const vocabSlide = lesson?.slides.find((slide) => slide.type === "vocab");
    console.log('vocab slide for vocab', vocabSlide);
    return vocabSlide?.vocab || [];
}

const fetchPhraseByLesson = (lessonId: string) => {
    const lesson = mockData.lessons.find((lesson) => lesson.id === lessonId);
    const vocabSlide = lesson?.slides.find((slide) => slide.type == "vocab");
    console.log('vocab slide for phrase', vocabSlide);
    return vocabSlide?.phrase || [];
}

const handleClick = () => {
    router.push('/lesson');
    return;
}

export default function VocabularyOverviewComponent({ lessonId }: VocabOverviewProps) {
    const vocabulary = fetchVocabByLesson(lessonId);
    const phrase = fetchPhraseByLesson(lessonId);
    console.log(phrase);

    return (
        <View>
            <View style={styles.vocabWrapper}>
                <View style={styles.VocabularOverviewTextContainer}>
                    <Text style={styles.headingText}>Vocabulary Overview</Text>
                </View>
                <Image
                    source={require('@/assets/images/greeting-hand.png')}
                    style={styles.subjectImage}
                />
                {phrase.map((pair) => (
                    <View key={pair.id}>
                        <Text style={styles.tainoPhrase}>{pair.taino}...</Text>
                        <Text style={styles.englishPhrase}>{pair.english}...</Text>
                    </View>
                ))}

            </View>

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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.background,
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
        width: 186,
        height: 28,
        fontSize: 24,
        fontWeight: '400',
        fontStyle: 'normal',
        fontFamily: 'Inter',
        textAlign: 'center',
        marginBottom: 16,
    },
    englishPhrase: {
        width: 219,
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
    },

});