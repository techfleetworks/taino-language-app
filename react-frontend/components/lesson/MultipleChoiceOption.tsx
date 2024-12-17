import { Pressable, Text, StyleSheet } from "react-native";
import Colors  from "../../constants/Colors";

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
        style={[styles.optionText]}
      >
        {option}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    backgroundColor: Colors.surface,
    padding: 12,
    marginBottom: 10,
  },
  optionSelected: {
    backgroundColor: Colors.surfaceVariant,
  },
  optionText: {
    color: Colors.text.onSurface,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  optionTextSelected: {
    color: Colors.text.onPrimary
  },
});
