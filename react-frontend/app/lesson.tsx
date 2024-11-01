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



export default function LessonScreen() {

    //get lesson by id from params
    const [ cards, setCards ] = useState<LessonSlide[]>([]);
    const [ currentSlide, setCurrentSlide ] = useState<number>(0); 
    const [displayFlex, setDisplayFlex] = useState<string>('flex');
    const [displayNone, setDisplayNone] = useState<string>('none');
    const [introText, setIntroText] = useState<boolean>(true); 

    const lesson = fetchLessonById(lessonId);

    useEffect(() => {

        const correctImageSlides = lesson?.slides.filter(slide => slide.type === "correct_image");
        if (lesson && correctImageSlides) {
            setCards(correctImageSlides as LessonSlide[]);
        }
    }, [lesson]);

    return (
        <View style={styles.questionContainer}>
            <CorrectImageQuestionSlide
                question={cards[currentSlide]?.question} 
                options={cards[currentSlide]?.options} 
                correctIndex={cards[currentSlide]?.correctIndex}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
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

