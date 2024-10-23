import { Pressable, Text, StyleSheet } from "react-native";

interface MultipleChoiceOptionProps {
  option: string;
  isSelected: boolean;
  onPress: () => void;
}

export default function MultipleChoiceOption({
  option,
  isSelected,
  onPress,
}: MultipleChoiceOptionProps) {
  return (
    <Pressable
      style={[styles.option, isSelected && styles.optionSelected]}
      onPress={onPress}
    >
      <Text
        style={[styles.optionText, isSelected && styles.optionTextSelected]}
      >
        {option}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#D9D9D9",
    padding: 12,
    marginBottom: 10,
  },
  optionSelected: {
    backgroundColor: "#475467",
  },
  optionText: {
    color: "#101828",
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  optionTextSelected: {
    color: "#FFFFFF",
  },
});
