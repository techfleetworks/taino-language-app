import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ColorValue,
} from 'react-native';
import Colors from '../../constants/Colors';

type TLPButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  style?: object; // Additional styles can be passed
};

export const TLPButton: React.FC<TLPButtonProps> = ({
  title,
  onPress,
  disabled = false,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonContainer,
        style,
        disabled && styles.buttonDisabled,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // White text color
    textAlign: 'center',
  },
  buttonDisabled: {
    backgroundColor: Colors.onBackground.disabled,
  },
});

export default TLPButton;