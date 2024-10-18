
import {
	Text as DefaultText,
	useColorScheme,
	View as DefaultView,
	Modal as DefaultModal,
  StyleProp,
  TextStyle,
  ViewProps,
  ImageStyle,
} from 'react-native';

import Colors from '../constants/Colors';
import { ViewStyle } from 'react-native';

export type themeprops = {
  lightColor?: string;
  darkColor?: string;
};

export type textstyle = {
  style?: StyleProp<TextStyle>
}

export type viewstyle = {
  style?: StyleProp<ViewStyle>
}

export type modalstyle = {
  style?: StyleProp<ImageStyle & TextStyle>
}

export type textprops = themeprops & DefaultText['props'];
export type viewprops = themeprops & DefaultView['props'];
export type modalprops = themeprops & DefaultModal['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }
  return Colors[theme][colorName];
}

export function Text(props: textprops) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

	return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: viewprops) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		'background',
  );

	return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Modal(props: viewprops) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
		{ light: lightColor, dark: darkColor },
		'background',
  );

	return <DefaultModal style={[{ backgroundColor }, style]} {...otherProps} />;
}
