import { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { LessonSlide } from "@/types/lessons";
import { mockData } from "@/mock-data";
import CorrectImageQuestionSlide from "@/components/lesson/CorrectImageQuestionSlide";
import Colors from "@/constants/Colors";
import ProgressStep from "@/components/lesson/ProgressStep";
import LessonComplete from "@/components/lesson/LessonComplete";

const fetchLessonById = (lessonId: string) => {
    return mockData.lessons.find(lesson => lesson.id === lessonId);
}

const lessonIdForFirstLesson = '482F80CA-D720-41C8-945D-93A6CD90F487'; //TODO: update this to the actual lesson ID(maybe as a environment variable?)

export default function LessonScreen() {

    const [ cards, setCards ] = useState<LessonSlide[]>([]);
    const [ currentSlide, setCurrentSlide ] = useState<number>(0); 
    const [ lessonInProgress, setLessonInProgress ] = useState<boolean>(true);
    const [ isComplete, setIsComplete ] = useState<boolean>(false);

    const lesson = fetchLessonById(lessonIdForFirstLesson);

    useEffect(() => {
        const correctImageSlides = lesson?.slides.filter(slide => slide.type === "correct_image");
        if (lesson && correctImageSlides) {
            setCards(correctImageSlides as LessonSlide[]);
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
                    currentStep={currentSlide + 1}
                    setCurrentStep={setCurrentSlide}
                    totalSteps={3}
                />}
            </SafeAreaView>
            <View style={styles.questionContainer}>
                {!isComplete ? (
                    <CorrectImageQuestionSlide
                        type={cards[currentSlide]?.type}
                        text={cards[currentSlide]?.text}
                        question={cards[currentSlide]?.question} 
                        options={cards[currentSlide]?.options} 
                        correctIndex={cards[currentSlide]?.correctIndex}
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        length={cards.length}
                        onComplete={() => {
                            setLessonInProgress(false);
                            setIsComplete(true);
                        }}
                    />
                ) : (
                    <LessonComplete lessonId={lessonIdForFirstLesson} />
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