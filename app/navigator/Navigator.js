/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExercisDetails, ExerciseHome, ScheduleScreen, SettingsScreen } from '../screens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={'ExerciseHome'}>

            <Stack.Screen name="ExerciseHome" component={ExerciseHome} options={{ headerShown: false }} />
            <Stack.Screen name="ExercisDetails" component={ExercisDetails} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ headerShown: false }} />
            <Tab.Screen name="AllExercises" component={StackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />

        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
