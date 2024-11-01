import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { LessonSlide } from "@/types/lessons";
import { mockData } from "@/mock-data";
import Slides from "@/components/Slides";
import CorrectImageQuestionSlide from "@/components/CorrectImageQuestionSlide";
import Colors from "@/constants/Colors";

const fetchLessonById = (lessonId: string) => {
    return mockData.lessons.find(lesson => lesson.id === lessonId);
}

const lessonId = "482F80CA-D720-41C8-945D-93A6CD90F487"

// 0 = english, 1 = spanish

export default function LessonScreen() {

    //get lesson by id from params
    const [ cards, setCards ] = useState<LessonSlide[]>([]);

    const lesson = fetchLessonById(lessonId);

    useEffect(() => {
        if (lesson) {
            setCards(lesson.slides as LessonSlide[]);
        }
    }, [lesson]);

    //render slides
    //render correct image question slide

    //render multiple choice question slide

    const correctImageQuestionSlide = cards.find(slide => slide.type === "correct_image");

    console.log(correctImageQuestionSlide);

    return (
        <View style={styles.questionContainer}>
            <CorrectImageQuestionSlide 
            question={correctImageQuestionSlide?.question} 
            options={correctImageQuestionSlide?.options} 
            correctIndex={correctImageQuestionSlide?.correctIndex}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    questionContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.background,
        padding: 8,
        paddingHorizontal: 32,
      },
})

