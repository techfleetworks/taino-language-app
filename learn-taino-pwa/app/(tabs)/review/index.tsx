import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/globals/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review</Text>
      <View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
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
