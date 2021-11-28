/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar, Text, TextInput } from 'react-native';
import { COLORS, SIZES } from '../constants';
import { BackgroundImage, ExerciseCard, ExerciseCardImage, ExerciseDuration, ExerciseImage, ExerciseSubtitle, ExerciseTitle, HalfContainer, LevelContainer, LevelText, SafeArea, SessionList, ShortTextField } from '../style/component-styles';
import SessionItem from '../components/SessionItem';


let sessions_data = [
    'Session 01',
    'Session 02',
    'Session 03',
    'Session 04',
    'Session 05',
    'Session 06',
];

const ExerciseDetails = ({ route }) => {
    const [exercise, setExercise] = useState(route.params.exercise);
    return (
        <SafeArea>
            <StatusBar
                backgroundColor={COLORS.secondary}
                barStyle="light-content"
                animated={true}
            />

            <HalfContainer style={{
                width: '100%',
                height: 0.42 * SIZES.height,
                padding: 20,
                backgroundColor: COLORS.secondary,
            }}>

                <BackgroundImage
                    source={require('../assets/images/BgPurple.png')}
                />
                <ExerciseTitle>
                    {exercise.title}
                </ExerciseTitle>

                <ExerciseDuration>
                    {exercise.duration}
                </ExerciseDuration>

                <ExerciseSubtitle>
                    {exercise.subTitle}
                </ExerciseSubtitle>

                <ShortTextField>
                    <Icon
                        style={{ marginHorizontal: 20 }}
                        name={'search'} size={25}
                        color={COLORS.black}
                    />
                    <TextInput placeholder="search" style={{ flex: 1 }} />
                </ShortTextField>

                <ExerciseImage source={exercise.image} />

            </HalfContainer>

            <SessionList
                data={sessions_data}
                contentContainerStyle={{
                    alignItems: 'center',
                }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={item => item}
                renderItem={({ item, index }) => (
                    <SessionItem
                        session={item}
                        index={index}
                    />
                )}

            />
            <ExerciseCard>
                <ExerciseCardImage
                    source={exercise.image} />
                <LevelContainer>
                    <LevelText>
                        Level 20
                    </LevelText>
                    <Text>
                        Practice daily to level up
                    </Text>
                </LevelContainer>


            </ExerciseCard>
        </SafeArea>
    );
};

export default ExerciseDetails;
