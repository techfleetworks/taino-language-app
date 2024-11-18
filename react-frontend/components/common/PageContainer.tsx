import { View, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

//A container for the main content of the app with a font family of Inter and padding
export default function PageContainer({ children } : { children: React.ReactNode }) {
    return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        fontFamily: 'Inter',
        gap: 64,
        backgroundColor: Colors.background,
        padding: 16,
    }
});