import Expo from 'expo';
import React from 'react';

import { TabNavigator } from 'react-navigation';

import AnimationScreen from './screen/AnimationScreen';
import CombineScreen from './screen/CombintScreen';

const RootNavigation = TabNavigator(
    {
        myAnimation: { 
            screen: AnimationScreen,
            navigationOptions: {
                tabBarLabel: 'Animation Tab',
            }
         },
        Combine: { 
            screen: CombineScreen,
            navigationOptions: {
                tabBarLabel: 'Combine Tab',
            }
        },
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
            labelStyle: {
                fontSize: 15,
            },
            style: {
                backgroundColor: '#fff',
                height: 55,
            },
            inactiveTintColor: '#888',
            activeTintColor: '#3454DA',
        },
    }
);

export default RootNavigation;