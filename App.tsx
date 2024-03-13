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
import Start from './src/screens/Onboarding/Start';
import GetStart from './src/screens/Onboarding/GetStart';
import SelectLanguageOnboarding from './src/screens/Onboarding/SelectLanguageOnboarding';
import LanguageLearn from './src/screens/Onboarding/LanguageLearn';
import GoalDaily from './src/screens/Onboarding/GoalDaily';
import Register from './src/screens/Onboarding/Register';
import Login from './src/screens/Onboarding/Login';
import SelectLevel from './src/screens/DoHomework/SelectLevel';
import SelectType from './src/screens/DoHomework/SelectType';
import TypeGrammar from './src/screens/DoHomework/Grammar/TypeGrammar';
import DoGrammar from './src/screens/DoHomework/Grammar/DoGrammar';
const Stack = createStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        />
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
        <Stack.Screen
          name="GetStart"
          component={GetStart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectLanguageOnboarding"
          component={SelectLanguageOnboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LanguageLearn"
          component={LanguageLearn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GoalDaily"
          component={GoalDaily}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectLevel"
          component={SelectLevel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectType"
          component={SelectType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TypeGrammar"
          component={TypeGrammar}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DoGrammar"
          component={DoGrammar}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Page2" component={Page2Screen} />
        <Stack.Screen name="Page3" component={Page3Screen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
