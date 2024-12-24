import React from "react";
import { useLessonModule } from "@/lib/LessonModuleProvider";
import { LessonModule } from "@/components/lesson/LessonModule";

//TODO: consider making this and other screens under onboarding one singular page using Stack
export default function LessonScreen() {


    const { lesson } = useLessonModule();

    if (!lesson) {
        return null;
    }

    return ( 
        <LessonModule /> 
    )
}

