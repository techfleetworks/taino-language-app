import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import { Home } from './screens/Home';
import { Profile } from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}