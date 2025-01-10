import React from "react";
import { useLessonModule } from "@/lib/LessonModuleProvider";
import { LessonModule } from "@/components/lesson/LessonModule";
import { ActivityIndicator, View } from "react-native";
import Colors from "@/constants/Colors";

export default function LessonScreen() {

    const { isLoading } = useLessonModule();

    if (isLoading) {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.background, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator size={96} color={Colors.primary} />
            </View>
        )
    }

    return ( 
        <LessonModule /> 
    )
}

