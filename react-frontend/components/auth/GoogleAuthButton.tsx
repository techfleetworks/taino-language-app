import Colors from "@/constants/Colors";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
export default function GoogleAuthButton({ onPress }: { onPress: () => void }) {
    return (
        <TouchableOpacity style={styles.googleButton} onPress={onPress}>
            {/* <Image source={require('../react-frontend/assets/icons/google_icon.png')} style={styles.googleIcon} /> */}
            <Text style={styles.thirdPartyButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    googleButton: {
        backgroundColor: Colors.surface,
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
        alignItems: 'center',
      },
      googleIcon: {
        width: 24,
        height: 24,
      },
    thirdPartyButtonText: {
        color: Colors.onPrimary.highEmphasis,
        fontSize: 16,
        fontWeight: 'bold',
      },
})  