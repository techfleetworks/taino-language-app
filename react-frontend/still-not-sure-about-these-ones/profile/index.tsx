import { Screen } from "react-native-screens";
import React from "react";
import { View, Text, Button } from "react-native";
import { StyleSheet } from 'react-native';
import Colors from "@/constants/Colors";

export const Page = () => {
    return <Text>This is profile page</Text>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
});