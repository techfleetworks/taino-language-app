import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { useNavigation } from "expo-router";
import StyledButton from "@/components/common/TLPButton";
import Colors from "@/constants/Colors";
import TextStyle from "@/constants/TextStyles";
import { TLPBottomButtonNav } from "@/components/common/TLPBottomButtonNav";
import PageContainer from "@/components/common/PageContainer";
export default function IndexPage(): JSX.Element {
  const navigation = useNavigation();
  return (
    <PageContainer style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("@/assets/humming_bird.png")}
        />
      </View>

      <View style={styles.welcomeTextWrapper}>
        <Text style={[TextStyle.heading1, { marginBottom: 16 }]}>Mabríka!</Text>
        <Text style={[TextStyle.heading1, { textAlign: 'center' }]}>Welcome to Learn Taíno!</Text>
      </View>
      <TLPBottomButtonNav>
        <StyledButton
            title="Ready to start learning?"
            titleSize={16}
            height={48}
            accessibilityLabel="Sign up"
            onPress={() => {
              navigation.navigate("onboarding/introduction" as never);
            }}
            buttonText={styles.signUpButtonText}
            otherProps={styles.signUpButton}
          />
        <StyledButton
          title="Already have an account?"
          titleSize={16}
          height={48}
          accessibilityLabel="Already have an account?"
          onPress={() => {
            navigation.navigate("signin" as never);
          }}
          buttonText={styles.continueButtonText}
          otherProps={styles.continueButton}
        />
      </TLPBottomButtonNav>
    </PageContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: 'relative',
    gap: 64,
    backgroundColor: Colors.background,
    padding: 16,
  },
  imageContainer: {
    marginTop: 100,
    padding: 64,
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
    borderColor: Colors.onBackground.highEmphasis,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  continueButtonText: {
    color: Colors.onBackground.highEmphasis,
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Inter",
    lineHeight: 19.36,
  },
});
