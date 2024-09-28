import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from 'react-native';

export const Home = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', {name: 'Jane'})
          }
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
  