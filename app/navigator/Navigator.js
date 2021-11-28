/* eslint-disable prettier/prettier */

import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExerciseDetails, ExerciseHome, ScheduleScreen, SettingsScreen } from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../constants';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={'ExerciseHome'}>

            <Stack.Screen name="ExerciseHome" component={ExerciseHome} options={{ headerShown: false }} />
            <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
};

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator

            initialRouteName="AllExercises"
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        const icons = {
                            Schedule: 'calendar',
                            AllExercises: 'barbell',
                            Settings: 'settings',
                        };
                        return (
                            <Icon name={icons[route.name]} color={focused ? COLORS.primary : COLORS.black}
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{
                                    fontSize: 20,
                                    opacity: focused ? 1 : 0.3,
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
                        return <Text
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{
                                color: focused ? COLORS.primary : COLORS.black,
                                marginBottom: 5,
                                opacity: focused ? 1 : 0.3,
                                fontWeight: '600',
                                fontSize: 13,
                            }}
                        >{labels[route.name]}</Text>;
                    },

                })}>

            <Tab.Screen name="Schedule" component={ScheduleScreen} options={{ headerShown: false }} />
            <Tab.Screen name="AllExercises" component={StackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />

        </Tab.Navigator >
    );
};

export default BottomTabNavigator;
