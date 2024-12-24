import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
  DimensionValue,
  TextStyle,
  AccessibilityProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {default as Colors} from '../../constants/Colors';
import { ColorValue } from 'react-native';
// import { IconProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
// import { IconButtonProps } from 'react-native-paper';

// materialUI
// https://reactnative.dev/docs/accessibility#accessibility-actions
// use Themed.tsx and StyledText.tsx text: if it will be the same throughout the program or override properties

// icon will need to be replaced with IconButtonProps or IconProps
// review and reconsider type for otherProps

type buttonprops = {
  title: string ;
  titleColor?: TextStyle['color'];
  titleSize: TextStyle['fontSize'];
  backgroundColor?: ColorValue;
  width?: DimensionValue;
  height?: DimensionValue;
  zIndex?: number;
  accessibilityLabel: AccessibilityProps['accessibilityLabel'];
  position?: 'relative' | 'absolute' | 'static';
  disabled?: boolean;
  onPress: ((event: GestureResponderEvent) => void) | undefined,
  buttonText: any,
  icon?: any,
  otherProps?: any
};

// onPress default should route to error message or default action or route to default screen?

// const buttonProps: buttonprops = {
//     title: '',
//     titleColor: '',
//     titleSize: 0,
//     backgroundColor: '',
//     width:'',
//     accessibilityLabel: '',
//     onPress: {},
// };

export default function StyledButton(buttonProps:buttonprops): JSX.Element {
  // const buttonProp = buttonProps;
  const {
    title = buttonProps.title,
    titleColor = buttonProps.titleColor,
    titleSize = buttonProps.titleSize,
    backgroundColor = buttonProps.backgroundColor,
    width = buttonProps.width,
    height = buttonProps.height,
    zIndex = buttonProps.zIndex,
    disabled = buttonProps.disabled,
    accessibilityLabel = buttonProps.accessibilityLabel,
    position = buttonProps.position,
    onPress = buttonProps.onPress,
    icon = buttonProps.icon,
    buttonText = buttonProps.buttonText,
    otherProps = buttonProps.otherProps
  } = buttonProps;
  //     titleColor: buttonProps.titleColor,
  //     titleSize: buttonProps.titleSize,
  //     backgroundColor: buttonProps.backgroundColor,
  //     width: buttonProps.width,
  //     accessibilityLabel: buttonProps.accessibilityLabel,
  //     onPress: buttonProps.onPress }; });

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonContainer,
        {
          width: width,
          height: height,
          zIndex: zIndex,
          position: position,
          backgroundColor: backgroundColor
        },
        disabled && styles.buttonDisabled,
        otherProps
      ]}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        {/* {icon ? (
          <Icon.Button
            name={icon}
            onPress={onPress}
            style={styles.buttonIcon}
          />
        ) : null} */}
        {icon && <Icon.Button
          name={icon}
          style={styles.buttonIcon}
        />}
        <Text
          style={[{color: titleColor, fontSize: titleSize, height: '100%'}, buttonText]}>
          {title}
        </Text>
      </TouchableOpacity>
    </Pressable>
  );
}

{
  /* <Button title={title} color={backgroundColor}  /> */
}
// change based on style guide along with styles below 
StyledButton.defaultProps = {
  title: 'Button',
  titleColor: Colors.onPrimary.highEmphasis,
  titleSize: 14,
  backgroundColor: Colors.primary,
  width: 320,
  accessibilityLabel: 'button',
  position: 'relative',
  zIndex: 1,
  disabled: false,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.primary,
  },
  buttonIcon: {
   
  },
  buttonNav: {
    display: 'flex',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    alignSelf: 'stretch',
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: Colors.onBackground.disabled
  }
});
