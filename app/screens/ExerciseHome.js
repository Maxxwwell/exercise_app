/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar, Text, TextInput,Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants';
import { MenuIcon, BackgroundImage, HalfContainer, SafeArea, TextField, CardImage } from '../style/component-styles';

let exercises = [
    {
        title: 'Diet Recommendation',
        image: require('../assets/images/Exercise1.png'),
        subTitle:
            'Live happier and healthier by learning the fundamentals of diet recommendation',
        duration: '5-20 MIN Course',
    },
    {
        title: 'Kegel Exercises',
        image: require('../assets/images/Exercise2.png'),
        subTitle:
            'Live happier and healthier by learning the fundamentals of kegel exercises',
        duration: '10-20 MIN Course',
    },
    {
        title: 'Meditation',
        image: require('../assets/images/Exercise3.png'),
        subTitle:
            'Live happier and healthier by learning the fundamentals of meditation and mindfulness',
        duration: '3-10 MIN Course',
    },
    {
        title: 'Yoga',
        image: require('../assets/images/Exercise4.png'),
        subTitle: 'Live happier and healthier by learning the fundamentals of Yoga',
        duration: '5-10 MIN Course',
    },
];

const ExerciseItem = ({ exercise }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                backgroundColor: COLORS.white,
                width: 0.5 * SIZES.width - 40,
                margin: 10,
                height: 180,
                borderRadius: 10,
                padding: 15,
                shadowColor: '#9e9898',
                elevation: 8,
            }}>
                <CardImage source={exercise.image}>

                </CardImage>
        </TouchableOpacity>
    );

};
const ExerciseHome = () => {
    return (
        <SafeArea>
            <StatusBar
                backgroundColor={COLORS.primary}
                barStyle="light-content"
                animated={true}
            />
            <HalfContainer
                style={{
                    width: '100%',
                    height: 0.45 * SIZES.height,
                    padding: 20,
                    backgroundColor: COLORS.primary,
                }}
            >
                <BackgroundImage
                    source={require('../assets/images/BgOrange.png')}
                />
                <MenuIcon>
                    <TouchableOpacity>
                        <Icon name={'grid'} size={25} color={COLORS.white} />
                    </TouchableOpacity>
                </MenuIcon>

                <TextField>
                    <Icon
                        style={{ marginHorizontal: 20 }}
                        name={'search'} size={25} color={COLORS.black}
                    />
                    <TextInput placeholder="search" style={{ flex: 1 }} />
                </TextField>

            </HalfContainer>


            <FlatList
                data={exercises}
                style={{ paddingHorizontal: 20 }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.title}
                renderItem={({ item }) => <ExerciseItem exercise={item} />}
            />
        </SafeArea>
    );
};

export default ExerciseHome;
