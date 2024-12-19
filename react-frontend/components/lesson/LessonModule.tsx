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

export function LessonModule({ data} : { data: Lesson}) {


    const { lesson, currentSection, currentActivityIndex, activities, goToPreviousActivity, advanceLesson } = useLessonModule();

    console.log("Lesson introduction", lesson.introduction)

    // const image = '@/assets/images/emoji_waving_hand.png';



    // //handles the user clicking on the last button of an activity and moving to the next section ie: introduction -> activities -> completion
    // const handleNextSection = () => {
    //     if(currentSection === '') {
    //         setCurrentSection('introduction')
    //     }
    //     if (currentSection === 'introduction' && currentActivity === activities.length - 1) {
    //         setCurrentSection('activities');
    //     } else if (currentSection === 'activities') {
    //         setCurrentSection('completion');
    //     }
    // }

    // //if lesson is not found, redirect to onboarding
    // if (!lesson) {
    //     //display error message
    //     console.error('Lesson not found');
    //     return <></>;
    // }

    //renders the introduction section of the lesson
    const renderIntro = () => {
        console.log("rendering intro....")
        console.log("Current activity", activities[currentActivityIndex])

        switch (activities[currentActivityIndex]?.type) {
            case 'introduction':
                return <VocabularyOverviewComponent />
            default: <></>
        }
    }

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
                        // handleNextSection();
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