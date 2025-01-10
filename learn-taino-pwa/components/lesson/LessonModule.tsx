import React from "react";
import { View, StyleSheet } from "react-native";
import { useLessonModule } from "@/lib/LessonModuleProvider";
import LessonIntro from "./LessonIntro";
import Colors from '@/constants/Colors'
import LessonComplete from "./LessonComplete";
import CorrectImageActivity from "./CorrectImageActivity";
import VocabularyOverviewComponent from "./VocabularyOverviewComponent";

export function LessonModule() {

    const { currentSection, currentActivityIndex, activities, advanceLesson } = useLessonModule();

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                {currentSection === '' && <LessonIntro /> } {/** Shows the user the lesson introduction */}
                {currentSection === 'introduction' && <VocabularyOverviewComponent  /> } {/* Shows the user vocabulary overview and zun zun dialogue*/}
                {currentSection === 'activities' && 
                    <CorrectImageActivity
                    activity={activities[currentActivityIndex]}
                    currentActivity={currentActivityIndex}
                    setCurrentActivity={advanceLesson}
                    length={activities.length}
                    onComplete={() => {
                        advanceLesson()
                    } } />
                } {/* Shows the interactive activities. Currently only one type of activity*/}
                {currentSection === 'complete' && <LessonComplete />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        position: 'relative',
        justifyContent: 'space-between'
    },
    questionContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.background,
        padding: 8,
        paddingHorizontal: 32,
        position: 'relative'
    },
})