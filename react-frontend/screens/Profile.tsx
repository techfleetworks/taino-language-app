import { Screen } from "react-native-screens";
import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from 'react-native';

export const Profile = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
});