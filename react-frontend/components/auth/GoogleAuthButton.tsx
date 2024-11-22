import Colors from "@/constants/Colors";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
export default function GoogleAuthButton({ onPress }: { onPress: () => void }) {
    return (
        <TouchableOpacity style={styles.googleButton} onPress={onPress}>
            <Image source={require('@/assets/icons/google_icon.png')} style={styles.googleIcon} />
            <Text style={styles.thirdPartyButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    googleButton: {
        backgroundColor: Colors.surface,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        gap: 6,
        width: '80%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      },
      googleIcon: {
        width: 32,
        height: 32,
      },
    thirdPartyButtonText: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: 'bold',
      },
})  