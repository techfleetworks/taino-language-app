import { View, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

//A container for the main content of the app with a font family of Inter and padding
export default function PageContainer({ children }: { children: React.ReactNode }) {
    return <View style={styles.root}>{children}</View>
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        fontFamily: 'Inter',
        padding: 16,
        backgroundColor: Colors.background,
    },
});