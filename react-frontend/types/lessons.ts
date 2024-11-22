export type Lesson = {
    id: string;
    title: string;
    description: string;
    image: string;
    updated_at: string | Date;
    created_at: string | Date;
    introduction: [];
    activities: [];
    completion: {};
}

// Update the IntroductionActivity type definition
export type Activity = {
    id: string;
    category: string;
    type: string;
    prompt?: string;
    options?: string[];
    correctIndex?: number;
    phrase?: { id: string; taino: string; english: string; };
    vocab?: { id: string; taino: string; english: string; }[];
};

export type VocabOverview = {
    id: string;
    type: string;
    category: string;
    phrase: { id: string, taino: string, english: string }[];
    vocab: { id: string, taino: string, english: string }[];
}