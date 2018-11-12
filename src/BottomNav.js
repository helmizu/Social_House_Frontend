import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Home from './components/Home';
import Thread from './components/Thread';
import Community from './components/Community';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomNav = createBottomTabNavigator(
    {
        Home: Home,
        Thread: Thread,
        Community: Community
    }, {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `home`;
                } else if (routeName === 'Thread') {
                    iconName = `list`;
                }
                else if (routeName === 'Community') {
                    iconName = `people`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default BottomNav;