import { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Activity } from "@/types/lessons";
import { mockData } from "@/mock-data";
import CorrectImageActivity from "@/components/lesson/CorrectImageActivity";
import Colors from "@/constants/Colors";
import ProgressStep from "@/components/lesson/ProgressStep";
import LessonComplete from "@/components/lesson/LessonComplete";
import { useLocalSearchParams } from "expo-router";

const fetchLessonById = (lessonId: string) => {
    return mockData.lessons.find(lesson => lesson.id === lessonId);
}

export default function LessonScreen() {

    const { id } = useLocalSearchParams<{ id: string }>();
    const [ cards, setCards ] = useState<Activity[]>([]);
    const [ currentActivity, setCurrentActivity ] = useState<number>(0); 
    const [ lessonInProgress, setLessonInProgress ] = useState<boolean>(true);
    const [ isComplete, setIsComplete ] = useState<boolean>(false);

    const lesson = fetchLessonById(id);

    useEffect(() => {
        const correctImageActivities = lesson?.activities.filter(activity => activity.type === "correct_image");
        if (lesson && correctImageActivities) {
            setCards(correctImageActivities as Activity[]);
        }
    }, [lesson]);

    //if lesson is not found, redirect to onboarding
    if (!lesson) {
        //display error message
        console.error('Lesson not found');
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                {lessonInProgress && <ProgressStep 
                    currentStep={currentActivity + 1}
                    setCurrentStep={setCurrentActivity}
                    totalSteps={3}
                />}
            </SafeAreaView>
            <View style={styles.questionContainer}>
                {!isComplete ? (
                    <CorrectImageActivity
                        activity={cards[currentActivity]}
                        currentActivity={currentActivity}
                        setCurrentActivity={setCurrentActivity}
                        length={cards.length}
                        onComplete={() => {
                            setLessonInProgress(false);
                            setIsComplete(true);
                        }}
                    />
                ) : (
                    <LessonComplete lessonId={id} />
                )}
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

