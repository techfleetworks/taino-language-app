import { Pressable, Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import ProgressStep from "@/components/lesson/ProgressStep";
import { useRouter } from "expo-router";
import Colors from "@/constants/Colors";

/**
 * Header aka Topbar
 */

interface HeaderProps {
    variant: 'back' | 'progress' | 'empty';
    currentStep?: number;
    totalSteps?: number;
}

export const BackHeader = ({ router }: { router: any }) => (
    <SafeAreaView>
            <View style={styles.progressContainer}>
            <Pressable onPress={() => router.back()} style={styles.arrowWrapper}>
                <Image
                    style={styles.arrow}
                    source={require('@/assets/images/arrow_back_ios_new.png')}
                />
            </Pressable>
        </View>
    </SafeAreaView>
);

export const EmptyHeader = () => (
    <SafeAreaView>
        <View style={{ width: 390, padding: 16, height: 48, backgroundColor: Colors.background }} />
    </SafeAreaView>
);

// const ProgressHeader = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => (
//     <SafeAreaView>
//         <View style={styles.progressContainer}>
//             <Pressable onPress={() => router.back()} style={styles.arrowWrapper}>
//                 <Image
//                     style={styles.arrow}
//                     source={require('@/assets/images/arrow_back_ios_new.png')}
//                 />
//             </Pressable>
//             <View style={styles.centerContentContainer}>
//                 <ProgressStep currentStep={currentStep} totalSteps={totalSteps} />
//             </View>
//         </View>
//     </SafeAreaView>
// );


export default function Header({ variant, currentStep = 1, totalSteps = 1 } : HeaderProps) {
    
    const router = useRouter();

    switch (variant) {
        case 'back':
            return <BackHeader router={router} />;
        case 'empty':
        default:
            return <EmptyHeader />;
    }
}

const styles = StyleSheet.create({
    progressContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: 390,
      padding: 16,
      alignItems: 'center',
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
  

