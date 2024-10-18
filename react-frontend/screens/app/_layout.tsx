import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';



import TabLayout from './(tabs)/_layout';

// catch any errors thrown by the Root Layout component.
import ErrorBoundary from '../errorboundary';

const Stack = createNativeStackNavigator();

function useCustomLoad() {
  const [loaded, setLoaded] = useState<boolean>(false);
  //@ts-ignore
  useEffect(() => require('../../assets/fonts/SpaceMono-Regular.ttf')
  .then(() => setLoaded(true)), []);
  return [loaded ? loaded : Error];
 
}
 



export default function RootLayout() {


	// prevent the splash screen from auto-hiding before asset loading is complete.
	// componentDidMount() {
	// 	// load assets while splash screen is shown
	// 	// afterwards (such as async tasks) hide the splash screen
	// 	SplashScreen.hide();
	// }

  // useEffect(() => SplashScreen.hide())
	
  // use different hook and/or anything required by root or initial load
  // const [loaded, error] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  //   ...FontAwesome,
  // });

  const [loaded, error] = useCustomLoad()
  

  //  Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.show();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <ErrorBoundary><RootLayoutNav /></ErrorBoundary>;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="(tabs)" component={TabLayout} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>r
    </ThemeProvider>
  );
}
