// import axios from "axios";
// import * as React from "react";
// import { View, Text, Button } from "react-native";
// import { StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// export const Page = () => {

//   const [ meow, setMeow ] = React.useState("");
//   const navigation = useNavigation<NativeStackNavigationProp<any>>();

//   const fetchMeow = async () => {
//     console.log("Meow!");

//     const response = await axios.get("http://localhost:8000/cat/meow");
//     const data = await response.data;

//     console.log(data);
//     setMeow(data);
//   }

//   return (
//     <View style={styles.container}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigation.navigate('profile', { name: 'Jane' })}
//       />
//       <Button title="Meow? 🐱" onPress={fetchMeow} />
//       <Text>{meow}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#25292e',
//       alignItems: 'center',
//       justifyContent: 'center',
//     }
// });