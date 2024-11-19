export interface LessonActivity {
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
    introduction: LessonActivity[];
    activities: LessonActivity[];
    completion: LessonActivity[];
}