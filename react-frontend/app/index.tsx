import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "expo-router";
import StyledButton from "@/components/TLPButton";
import Colors from "@/constants/Colors";
import TextStyle from "@/constants/TextStyles";

export default function Welcome(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/humming_bird.png")}
        />
      </View>

      <View style={styles.welcomeTextWrapper}>
        <Text style={TextStyle.heading1}>Mabríka!</Text>
        <Text style={TextStyle.heading2}>Welcome to Learn Taíno!</Text>
      </View>
      <View>
        <View style={styles.buttonContainer}>
          <Text style={styles.promptText}>Want to start learning?</Text>
          <StyledButton
            title="Sign up"
            titleSize={16}
            height={48}
            accessibilityLabel="Sign up"
            onPress={() => {
              navigation.navigate("signup");
            }}
            buttonText={styles.signUpButtonText}
            otherProps={styles.signUpButton}
          />
        </View>
        <Text style={styles.promptText}>Already have an account?</Text>
        <StyledButton
          title="Continue your journey"
          titleSize={16}
          height={48}
          accessibilityLabel="Continue your journey"
          onPress={() => {
            navigation.navigate("onboarding");
          }}
          buttonText={styles.continueButtonText}
          otherProps={styles.continueButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 64,
    backgroundColor: Colors.background,

    padding: 16,
  },
  imageContainer: {
    paddingBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 128,
    height: 128,
  },
  welcomeTextWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  promptText: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: "left",
    alignSelf: "flex-start",
    color: Colors.onSurface.highEmphasis,
    lineHeight: 16.95,
  },
  buttonContainer: {
    marginBottom: 32,
  },
  signUpButton: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 16,

    marginVertical: 10,
  },
  signUpButtonText: {
    color: Colors.background,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 19.36,
  },
  continueButton: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  continueButtonText: {
    color: Colors.primary,
    fontWeight: "700",
    textAlign: "center",
  },
});
