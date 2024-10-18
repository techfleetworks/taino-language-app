import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../../constants/Colors';
import TabOneScreen from './home';
import TabTwoScreen from './lessons';

const Tabs = createBottomTabNavigator();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  // icon?: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

	return (
    <NavigationContainer independent={true}>
		<Tabs.Navigator
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
			}}
		>
      <Tabs.Screen
        name="home"
        component={TabOneScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => {
            return <TabBarIcon name="code" color={color} />;
          },
          headerRight: () => {
            return (
              <Link to={{screen: 'modal'}}>
                <Pressable>
                  {({ pressed }) => {
                    return (
                      <FontAwesome
                        name="info-circle"
												size={25}
												color={Colors[colorScheme ?? 'light'].text}
												style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
											/>
										);
									}}
								</Pressable>
              </Link>
            );
          },
        }}
      />
      <Tabs.Screen
        name="lessons"
        component={TabTwoScreen}
        options={{
          title: 'Lessons',
          tabBarIcon: ({ color }) => {
            return <TabBarIcon name="code" color={color} />;
          },
        }}
      />
    </Tabs.Navigator>
    </NavigationContainer>
  );
}
