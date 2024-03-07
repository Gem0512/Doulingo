/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Exam from './src/screens/Exam/Exam';
const Stack = createStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Exam"
          component={Exam}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Page2" component={Page2Screen} />
        <Stack.Screen name="Page3" component={Page3Screen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
