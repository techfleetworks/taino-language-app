import { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Activity } from "@/types/lessons";
import { mockData } from "@/mock-data-v2";
import CorrectImageQuestionActivity from "@/components/lesson/correct-image-activity";
import Colors from "@/constants/Colors";
import ProgressStep from "@/components/lesson/ProgressStep";
import LessonComplete from "@/components/lesson/LessonComplete";

import LessonIntro from "@/components/lesson/LessonIntro";
import VocabularyOverviewComponent from "@/components/lesson/VocabularyOverviewComponent";
const fetchLessonById = (lessonId: string) => {
    return mockData.lessons.find(lesson => lesson.id === lessonId);
}

const lessonIdForFirstLesson = '482F80CA-D720-41C8-945D-93A6CD90F487'; //TODO: update this to the actual lesson ID(maybe as a environment variable?)

export default function LessonScreen() {

    const [ activities, setActivities ] = useState<Activity[]>([]);
    const [ currentSection, setCurrentSection ] = useState<'' | 'introduction' | 'activities' | 'completion'>('');
    const [ currentActivity, setCurrentActivity ] = useState<number>(0); 

    const lesson = fetchLessonById(lessonIdForFirstLesson);

    useEffect(() => {
        if (lesson) {
            if (currentSection === 'introduction') {
                setActivities(lesson.introduction as unknown as Activity[]);
                setCurrentActivity(0);
            } else {
                setActivities(lesson.activities as unknown as Activity[]);
                setCurrentActivity(0);
            }
        }
    }, [lesson, currentSection]);

    //handles the user clicking on the last button of an activity and moving to the next section ie: introduction -> activities -> completion
    const handleNextSection = () => {
        if(currentSection === '') {
            setCurrentSection('introduction')
        }
        if (currentSection === 'introduction' && currentActivity === activities.length - 1) {
            setCurrentSection('activities');
        } else if (currentSection === 'activities') {
            setCurrentSection('completion');
        }
    }

    //if lesson is not found, redirect to onboarding
    if (!lesson) {
        //display error message
        console.error('Lesson not found');
        return <></>;
    }

    //renders the introduction section of the lesson
    const renderIntro = () => {
        switch (activities[currentActivity]?.type) {
            case 'overview':
                return <VocabularyOverviewComponent 
                    image={lesson.image} 
                    phrase={activities[currentActivity]?.phrase} 
                    vocab={activities[currentActivity]?.vocab} 
                    handleClick={handleNextSection} 
                />
            default: <></>
        }
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                {currentSection === 'activities' && <ProgressStep
                    currentStep={currentActivity + 1}
                    setCurrentStep={setCurrentActivity}
                    totalSteps={3}
                />}
            </SafeAreaView>
            <View style={styles.questionContainer}>
                {currentSection === '' && <LessonIntro
                    handleClick={handleNextSection}
                    title={lesson.title}
                    image={lesson.image}
                    description={lesson.description}
                />}
                {currentSection === 'introduction' && renderIntro()}
                {currentSection === 'activities' &&
                    <CorrectImageQuestionActivity
                    activity={activities[currentActivity]}
                    currentActivity={currentActivity}
                    setCurrentActivity={setCurrentActivity}
                    length={activities.length}
                    onComplete={() => {
                        handleNextSection();
                    } } />
                }
                {currentSection === 'completion' && <LessonComplete lessonId={lessonIdForFirstLesson} />}
            </View>
        </View>
    );
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