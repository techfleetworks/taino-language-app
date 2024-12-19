import React, { useEffect } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { Activity } from "@/types/lessons";
import type { Lesson } from "@/types/lessons";
import { useLessonModule } from "@/lib/LessonModuleProvider";
import LessonIntro from "./LessonIntro";
import Colors from '@/constants/Colors'
import LessonComplete from "./LessonComplete";
import CorrectImageActivity from "./CorrectImageActivity";
import ProgressStep from "./ProgressStep";
import { BackHeader, LessonModuleBackHeader } from "../common/Header";
import { router } from "expo-router";
import VocabularyOverviewComponent from "./VocabularyOverviewComponent";

export function LessonModule({ id } : { id: string }) {


    const { currentSection, currentActivityIndex, activities, goToPreviousActivity, advanceLesson } = useLessonModule();

    return (
        <View style={styles.container}>
            {/* TODO: Update  to use header instead of adding it here.*/}
            <SafeAreaView>
                {currentSection === 'activities' ? <ProgressStep
                    currentStep={currentActivityIndex + 1}
                    handleGoToPrevious={goToPreviousActivity}
                    totalSteps={3}
                /> : <LessonModuleBackHeader />}
            </SafeAreaView>
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
    },
    questionContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.background,
        padding: 8,
        paddingHorizontal: 32,
    },
})