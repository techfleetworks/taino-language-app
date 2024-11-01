import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import TextStyle from '@/constants/Text';
import Colors from '@/constants/Colors';

interface CorrectImageOptionProps {
    userTranslation: any;
    image: any;
    index: number;
    isSelected: boolean;
    onPress: () => void;
    disabled?: boolean;
}

export default function CorrectImageOption({ userTranslation, image, isSelected, onPress, disabled }: CorrectImageOptionProps): JSX.Element {

    console.log("userTranslation", userTranslation);
    
    return (
        <TouchableOpacity 
            style={[styles.optionContainer, isSelected && styles.optionSelected]}
            onPress={onPress}
            disabled={disabled}
        >
            <Image 
                source={image}
                style={{ width: 96, height: 96 }}
            />
            <Text style={styles.optionText}>{userTranslation}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    optionContainer: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.surface,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionSelected: {
        backgroundColor: Colors.surfaceVariant,
    },
    optionText: {
        textAlign: 'center',
        fontSize: parseInt(TextStyle.button1.fontSize, 10),
        fontWeight: TextStyle.button1.fontWeight as 'normal' | 'bold',
        padding: 16,
        color: Colors.text.onSurface
    }
})