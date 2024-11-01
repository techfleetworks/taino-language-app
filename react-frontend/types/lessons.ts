export interface LessonSlide {
    type: string;
    text: string;
    category?: string;
    question?: string;
    options?: string[];
    correctIndex?: number;
}

export type Lesson = {
    id: string;
    title: string;
    slides: LessonSlide[];
    image: string;
    description: string;
}