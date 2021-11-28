/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
// import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, SIZES } from '../constants';
import { CardItems, SessionCards, SessionText } from '../style/component-styles';

const SessionItem = ({ session, index }) => {
    return (
        <SessionCards
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: 0.5 * SIZES.width - 40,
                height: 70,
                padding: 15,
                borderRadius: 10,
                backgroundColor: COLORS.white,
                elevation: 5,
                marginHorizontal: 7,
                marginBottom: 10,

            }}>
            <CardItems
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: index == 0 ? COLORS.purple : COLORS.white,
                    elevation: 5,
                }}
            >
                <Icon

                    style={{ color: index == 0 ? COLORS.white : COLORS.purple }}
                    name={'play'}
                    size={18}

                />
            </CardItems>
            <SessionText>{session}</SessionText>


        </SessionCards>

    );

};

export default SessionItem;
