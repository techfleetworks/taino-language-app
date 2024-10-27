import React from 'react';
// import { StatusBar } from 'status-bar';
import { Platform, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View
				style={styles.separator}
				lightColor={Colors.text.onSurface}
				darkColor={Colors.text.onPrimary}
			/>
  

			{/* use a light status bar on iOS to account for the black space above the modal */}
			{/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
		justifyContent: 'center',
	},
	separator: {
		height: 1,
    marginVertical: 30,
		width: '80%',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
