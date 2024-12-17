import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import Colors from "@/constants/Colors";

//A container for the main content of the app with a font family of Inter and padding
//used to wrap the main content of a page
export default function PageContainer({ children, style } : { children: React.ReactNode, style?: ViewStyle }) {
    return <View style={[styles.container, style]}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'Inter',
        backgroundColor: Colors.background,
        padding: 16,
        position: 'relative',
    }
});