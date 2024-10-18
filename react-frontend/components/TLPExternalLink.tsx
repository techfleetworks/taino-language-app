// import { Link } from 'expo-router';
// import * as WebBrowser from 'expo-web-browser';
import React, { EventHandler } from 'react';
import {
  Platform,
  TouchableOpacity,
  StyleSheet,
  Text,
  Linking,
  TextProps,
  GestureResponderEvent
} from 'react-native';

// use Themed.tsx and StyledText.tsx text: if it will be the same throughout the program or override properties

// export function ExternalLink(
//   props: Omit<React.ComponentProps<typeof Link>, 'href'> & { href: string },
// ) {
//   return (
//     <Link
//       hrefAttrs={{
//         // On web, launch the link in a new tab.
//         target: '_blank',
//       }}
//       {...props}
//       // @ts-expect-error: External URLs are not typed.
//       href={props.href}
//       onPress={(e) => {
//         if (Platform.OS !== 'web') {
//           // Prevent the default behavior of linking to the default browser on native.
//           e.preventDefault();
//           // Open the link in an in-app browser.
//           WebBrowser.openBrowserAsync(props.href as string);
//         }
//       }}
//     />
//   );
// }

export function ExternalLink(props: {
  href: string;
  text: string;
  style?: {} | Object | undefined;
}) {
  const {href, text, style = {}} = props;

  const onPress = (event: GestureResponderEvent) => {
    if (Platform.OS !== 'web') {
      event.preventDefault();
      Linking.canOpenURL(href).then(() => {
        Linking.openURL(href);
      });
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textDecoration: 'underline',
  },
});
