import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import TextStyle from '@/constants/Text';
import Colors from '@/constants/Colors';
import { strictEqual } from "assert";

interface CorrectImageOptionProps {
    userTranslation: any;
    image: any;
    index: number;
    isSelected: boolean;
    onPress: () => void;
    disabled?: boolean;
    showResult?: boolean;
    isCorrect?: boolean;
}

export default function CorrectImageOption({ 
    userTranslation, 
    image, 
    isSelected, 
    onPress,
    disabled,
    showResult,
    isCorrect 
}: CorrectImageOptionProps): JSX.Element {
    
    const getOptionStyle = () => {
        if (!showResult) {
            return isSelected ? styles.optionSelected : styles.optionDefault;
        }
        if (isSelected) {
            return isCorrect ? styles.optionCorrect : styles.optionError;
        }
        return styles.optionDefault;
    };

    return (
        <TouchableOpacity 
            style={[getOptionStyle(), styles.optionContainer]}
            onPress={onPress}
            disabled={disabled}
        >
            <Image 
                source={image}
                style={{ width: 96, height: 96 }}
            />
            <Text style={styles.optionText}>{userTranslation}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    optionContainer: {
        padding: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionDefault: {
        backgroundColor: Colors.surface,
    },
    optionSelected: {
        backgroundColor: Colors.surfaceVariant,
    },
    optionCorrect: {
        backgroundColor: Colors.primaryVariant,
        borderWidth: 2,
        borderColor: Colors.primary,
    },
    optionError: {
        backgroundColor: Colors.errorVariant,
        borderWidth: 2,
        borderColor: Colors.error,
    },
    optionText: {
        textAlign: 'center',
        fontSize: parseInt(TextStyle.button1.fontSize, 10),
        fontWeight: TextStyle.button1.fontWeight as 'normal' | 'bold',
    }
});