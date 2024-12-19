// Define the LessonIntro type
export type LessonIntro = {
    category: string;
    // phrase: { 
    //     id: string; 
    //     taino: string; 
    //     english: string; 
    // };
    vocab_overview: VocabOverview[]
};

export type Lesson = {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    updated_at: string | Date;
    created_at: string | Date;
    introduction: LessonIntro; 
    activities: Activity
};

export type Activity = {
    id: string;
    category?: string;
    type?: 'introduction' | 'activities' | 'complete';
    prompt?: string;
    options?: string[];
    correctIndex?: number;
    phrase?: { id: string; taino: string; english: string; };
    vocab?: { id: string; taino: string; english: string; }[];
    vocab_overview?: VocabOverview
};

export type Vocabulary = {
    id: string,
    taino: string,
    english: string,
    audio?: string
}

export type VocabOverview = {
    id: string,
    taino: string,
    english: string
    // phrase: { id: string, taino: string, english: string }[];
    // vocab: { id: string, taino: string, english: string }[];
}