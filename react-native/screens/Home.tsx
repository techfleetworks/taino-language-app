import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from 'react-native';

export const Home = ({ navigation }) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
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

  
  