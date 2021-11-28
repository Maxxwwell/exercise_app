/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { CardImage, CardTitle } from '../style/component-styles';
import { COLORS, SIZES } from '../constants';

export const ExerciseItem = ({ exercise, navigation }) => {
    return (
        <TouchableOpacity
        onPress={()=> navigation.navigate('ExerciseDetails', {exercise: exercise})}
            activeOpacity={0.8}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                backgroundColor: COLORS.white,
                width: 0.5 * SIZES.width - 40,
                margin: 10,
                height: 190,
                borderRadius: 10,
                padding: 15,
                shadowColor: '#9e9898',
                elevation: 8,
            }}>
            <CardImage source={exercise.image} />

            <CardTitle>
                {exercise.title}
            </CardTitle>


        </TouchableOpacity>
    );
};
