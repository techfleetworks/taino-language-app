import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Activity } from "@/types/lessons";
import CorrectImageActivity from "@/components/lesson/CorrectImageActivity";
import Colors from "@/constants/Colors";
import ProgressStep from "@/components/lesson/ProgressStep";
import LessonComplete from "@/components/lesson/LessonComplete";
import LessonIntro from "@/components/lesson/LessonIntro";
import VocabularyOverviewComponent from "@/components/lesson/VocabularyOverviewComponent";
import { BackHeader } from "@/components/common/Header";
import { useRouter } from "expo-router";
import { useLessonModule } from "@/lib/LessonModuleProvider";
import { LessonModule } from "@/components/lesson/LessonModule";

//TODO: consider making this and other screens under onboarding one singular page using Stack
export default function LessonScreen() {

    const { lesson } = useLessonModule();

    return ( 
        <LessonModule data={lesson} /> 
    )
}

