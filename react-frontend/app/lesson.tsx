import { router } from "expo-router";
import { View, Text, Button } from "react-native";

export default function LessonScreen() {
    return (
        <View>
            <Text>Lesson Screen</Text>
            <Button title="Go to Home" onPress={() => router.push('/home')} />
        </View>
    )
}