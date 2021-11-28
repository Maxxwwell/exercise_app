/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { SafeAreaView, View, Image, Text } from 'react-native';
import { COLORS, SIZES } from '../constants';

const h = 0.45 * SIZES.height;
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
