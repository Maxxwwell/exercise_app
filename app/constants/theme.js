/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const COLORS = {
    accent: '#FF7363',
    primary: '#383737',
    secondary: '#e1d3ed',

    black: '#171717',
    white: '#FFFFFF',
    background: '#252C4A',
};

export const SIZES = {
    base: 10,
    width,
    height,
};
