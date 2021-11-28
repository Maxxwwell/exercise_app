/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExercisDetails, ExerciseHome, ScheduleScreen, SettingsScreen } from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';


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
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    height: 70,
                },
            }}
            initialRouteName="AllExercises"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const icons = {
                        Schedule: 'calendar',
                        AllExercises: 'barbell',
                        Settings: 'settings',
                    };
                    return (
                        <Icon name={icons[route.name]} color={focused ? COLORS.primary : COLORS.black}
                            style={{
                                fontSize: 20,
                                opacity: focused ? 1 : 0.5,
                            }}
                        />
                    );
                },

                tabBarLabel: ({ focused }) => {
                    const labels = {
                        Schedule: 'Today',
                        AllExercises: 'All Exercises',
                        Settings: 'Settings',
                    };
                    return <Text>{labels[route.name]}</Text>
                },

            })}>

            <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ headerShown: false }} />
            <Tab.Screen name="AllExercises" component={StackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />

        </Tab.Navigator >
    );
};

export default BottomTabNavigator;
