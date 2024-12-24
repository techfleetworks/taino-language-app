import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/Colors";
import TextStyles from "@/constants/TextStyles";

interface VocabularyProps {
    english: string;
    taino: string;
}

export default function Vocabulary({
    english,
    taino,
}: VocabularyProps) {
    return (
        <View style={styles.vocabContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.vocabText}>{taino}</Text>
            </View>
            <Image 
                style={styles.arrowContainer}
                source={require('@/assets/icons/arrow-right.png')}
            />
            <View style={styles.textContainer}>
                <Text style={styles.vocabText}>{english}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    vocabContainer: {
        fontFamily: 'Inter',
        paddingVertical: 9,
        paddingHorizontal: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    textContainer: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: Colors.surface,
        minWidth: 96,
    },
    vocabText: {
        fontSize: 16,
        fontWeight: '600',
        fontStyle: 'normal',
    },
    arrowContainer: {
        width: 24,
        height: 24,
    },
});