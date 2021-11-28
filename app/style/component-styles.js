/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { SafeAreaView, View, Image, Text } from 'react-native';
import { COLORS, SIZES } from '../constants';


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
`;

export const ExerciseDuration = styled(Text)`
    font-size: 16px;
    opacity: 0.6;
    margin-vertical: 5px;
`;


export const ExerciseSubtitle = styled(Text)`
    font-size: 16px;
    font-weight: 500;
    margin-vertical: 5px;
    width: 85%;
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
    height: 110%;
    width: 175%;
    bottom: 40px;
`;
/////////////////////////////////////////////////////////
