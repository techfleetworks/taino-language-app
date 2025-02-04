import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import { Audio } from "expo-av";
import TextStyle from '@/constants/TextStyles';
import Colors from '@/constants/Colors';

interface CorrectImageOptionProps {
    userTranslation: any;
    image: any;
    audio: any;
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
    audio, 
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

    //handle onPress with audio 
    const handlePress = async () => {
        onPress();
        if (audio) {
          try {
            const { sound } = await Audio.Sound.createAsync(audio);
            await sound.playAsync();
          } catch (error) {
            console.error('Error playing sound:', error);
          }
        }
      };

    return (
        <TouchableOpacity 
            style={[getOptionStyle(), styles.optionContainer]}
            onPress={handlePress}
            disabled={disabled}
        >
            <View style={styles.imageContainer}>
                <Image 
                    source={typeof image === 'string' ? { uri: image } : image}
                    style={{ width: '100%', height: '100%' }}
                    contentFit="contain"
                />
            </View>
            <Text style={styles.optionText}>{userTranslation}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    optionContainer: {
        fontFamily: 'Inter',
        paddingTop: 24,
        paddingBottom: 16,
        paddingHorizontal: 16,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 96,
        height: 96,
        marginBottom: 16,
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
        fontSize: TextStyle.button1.fontSize,
        fontWeight: TextStyle.button1.fontWeight as 'normal' | 'bold',
    }
});