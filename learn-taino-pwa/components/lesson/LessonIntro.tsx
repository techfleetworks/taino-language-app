import React from 'react'
import { TLPBottomButtonNav } from "@/components/common/TLPBottomButtonNav";
import StyledButton from "@/components/common/TLPButton";
import Colors from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import TextStyles from "@/constants/TextStyles";
import { useLessonModule } from "@/lib/LessonModuleProvider";


//The very first slide that introduces the user to lesson with a title, description and thumbnail and prompts them
// to start the lesson
export default function LessonIntro() {

    const { advanceLesson, lesson, startLesson } = useLessonModule()

    console.log("lesson intro.")

   return (
    <>
        <View style={styles.textWrapper}>
            <View style={styles.headingTextContainer}>
                <Text style={styles.headingText}>{lesson?.title}</Text>
            </View>
            <Image
                source={lesson?.thumbnail}
                style={styles.subjectImage}
            />
            <Text style={styles.descriptionText}>{lesson?.description}</Text>
        </View>   
        <TLPBottomButtonNav style={styles.buttonWrapper}>
            <StyledButton
            title={'Continue'}
            titleSize={16}
            height={48}
            accessibilityLabel={'Continue'}
            onPress={startLesson} 
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
    textWrapper: {
        display: 'flex',
        fontFamily: 'Inter',
        flexDirection: 'column',
        alignItems: 'center'
    },
    headingTextContainer: {
        marginBottom: 92,
        marginTop: 20,
    },
    headingText: {
        fontSize: 32,
        fontWeight: TextStyles.heading1.fontWeight,
        textAlign: 'center',

    },
    image: {
        width: 128,
        height: 128,
        marginBottom: 74,
    },
    descriptionText: {
        fontSize: TextStyles.heading2.fontSize,
        width: 306,
        fontWeight: TextStyles.body.fontWeight,
        textAlign: 'center',
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
        fontWeight: TextStyles.button1.fontWeight,
        lineHeight: 1,
    },
    buttonWrapper: {
        display: 'flex',
        width: '100%',
        paddingVertical: 48,
        paddingHorizontal: 32,
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
    },
    subjectImage: {
        width: 89,
        height: 87,
        marginBottom: 74,
    }
});