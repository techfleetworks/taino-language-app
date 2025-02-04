import React from 'react';
import {
    Image,
    Text,
    StyleSheet, 
    View,
} from 'react-native';
import StyledButton from '@/components/common/TLPButton';
import { TLPBottomButtonNav } from '@/components/common/TLPBottomButtonNav';
import Vocabulary from './Vocabulary';
import { useRouter } from 'expo-router';
import Colors from '@/constants/Colors';
import { useLessonModule } from '@/lib/LessonModuleProvider';

export default function LessonComplete() {

    const { lesson } = useLessonModule()

    const router = useRouter();

    const handleClick = (routeName : string) => {
        router.push(`/${routeName}`);
        return;
    }

    return (
        <>
            <View style={styles.vocabWrapper}>
                <View style={styles.completeTextContainer}>
                    <Text style={styles.completeText}>Lesson Complete!</Text>
                    <Text style={styles.completeText}>Great Job!</Text>
                </View>
                <Image
                    source={require('@/assets/icons/emoji_party_popper.png')}
                    style={styles.image}
                />
            </View>   
                <Text style={styles.vocabLearnedText}>Vocabulary learned:</Text>
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
                    onPress={() => handleClick('onboarding/create-account')} //TODO: update this so that depending on the lesson, it will redirect the user to home if this is not the first lesson
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
        display: 'flex',
        width: '100%',
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