import {Link} from '@react-navigation/native';
// import {Link} from 'native-router-react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';

import {Text, View} from '../components/Themed';

const Stack = createStackNavigator();

export default function NotFoundScreen() {
  return (
    <Stack.Navigator>
      {/* TODO: add home screen to route to and link  */}
      {/* <Stack.Screen name="" component={} options={{ title: 'Oops!' }} /> */}
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>
      
        <Link to={{screen: 'Main'}} style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    color: '#2e78b7',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
