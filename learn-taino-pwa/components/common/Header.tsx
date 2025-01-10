import React from "react";
import { Pressable, Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import ProgressStep from "@/components/lesson/ProgressStep";
import { router } from "expo-router";
import Colors from "@/constants/Colors";
import { useLessonModule } from "@/lib/LessonModuleProvider";

interface HeaderProps {
    variant: 'back' | 'lesson' | 'empty';
}

const BackHeader = ({ handleBack } : { handleBack?: any }) => {

    return (
        <SafeAreaView>
                <View style={styles.headerContainer}>
                <Pressable onPress={handleBack ? handleBack : () => router.back} style={styles.arrowWrapper}>
                    <Image
                        style={styles.arrow}
                        source={require('@/assets/images/arrow_back_ios_new.png')}
                    />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const ActivityHeader = ({ handleGoBack } : { handleGoBack : () => void }) => {
    const { totalActivities, currentActivityIndex } = useLessonModule();

    return (
            <ProgressStep 
            handleGoToPrevious={handleGoBack} 
            currentStep={currentActivityIndex} 
            totalSteps={totalActivities} />
    );
}

const LessonModuleHeader = () => {

    const { currentSection, currentActivityIndex, goBack } = useLessonModule() 

    const handleGoBack = () => {
        if(currentSection === '' && currentActivityIndex === 0) {
            router.back()
        } else {
            goBack()
        }
    }

    switch(currentSection) {
        case 'activities':
            return <ActivityHeader handleGoBack={handleGoBack} />
        case 'complete':
            return (
                <EmptyHeader />
            )
        case 'introduction':
            return (
                <BackHeader />
            )
        case '':
        default:
            return <EmptyHeader />
    }
}

export const EmptyHeader = () => (
    <SafeAreaView>
        <View style={styles.emptyHeader} />
    </SafeAreaView>
);

const headerVariants = {
    back: <BackHeader />,
    lesson: <LessonModuleHeader />,
    empty: <EmptyHeader />
}

export default function Header({ variant } : HeaderProps) {
    return headerVariants[variant];
}

const styles = StyleSheet.create({
    emptyHeader: {
        width: 390, 
        padding: 16, 
        height: 48, 
        backgroundColor: Colors.background 
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: 390,
      padding: 16,
      alignItems: 'center',
      backgroundColor: Colors.background,
    },
    arrowWrapper: {
      display: 'flex',
      paddingRight: 12,
      alignItems: 'center',
    },
    arrow: {
      width: 24,
      height: 24,
    },
    centerContentContainer: {
      display: 'flex',
      height: 16,
      width: '100%',
      paddingVertical: 0,
      paddingHorizontal: 8,
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: 4,
      flex: 1,
    }
});