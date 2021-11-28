/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { SafeAreaView, View, Image, Text, FlatList } from 'react-native';


export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    position: relative;
`;

export const HalfContainer = styled(View)`
`;

export const BackgroundImage = styled(Image)`
    position: absolute;
    top: 60px;
    left: -20px
`;

export const MenuIcon = styled(View)`
    justify-content: flex-start;
`;

export const TextField = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    border-radius: 25px;
    background-color: white;
    margin-vertical: 30px
`;

export const CardImage = styled(Image)`
    flex: 1;
    resize-mode: cover;
    width: 100%;
`;

export const CardTitle = styled(Text)`
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
`;



///////////////////////////////////////////////////////////////////

export const ExerciseTitle = styled(Text)`
    font-size: 35px;
    line-height: 45px;
    font-weight: 600;
`;

export const ExerciseDuration = styled(Text)`
    font-size: 16px;
    opacity: 0.6;
    margin-vertical: 5px;
`;


export const ExerciseSubtitle = styled(Text)`
    font-size: 15px;
    font-weight: 700;
    margin-vertical: 5px;
    width: 70%;
`;

export const ShortTextField = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    width: 60%;
    border-radius: 25px;
    background-color: white;
    margin-vertical: 30px
`;


export const ExerciseImage = styled(Image)`
    position: absolute; 
    resize-mode: contain;
    height: 250px;
    width: 280px;
    bottom: 40px;
    right: -70px
`;
export const SessionList = styled(FlatList)`
margin-top: -30px;
`;


export const SessionCards = styled(View)`
`;

export const CardItems = styled(View)`
`;


export const SessionText = styled(Text)`
    font-size: 16px;
    font-weight: 400;
    margin-horizontal: 10px;
`;

export const ExerciseCard = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-radius: 10px;
    paddding: 10px;
    elevation: 5;
    background-color: white;
    bottom: 20px;
    height: 70px;
    margin-horizontal: 30px

`;
export const ExerciseCardImage = styled(Image)`
    height: 70px;
    width: 80px;
    resize-mode: center;
    bottom: 10px;
`;


export const LevelContainer = styled(View)`
`;


export const LevelText = styled(Text)`
    
    font-weight: 800;
`;


/////////////////////////////////////////////////////////
