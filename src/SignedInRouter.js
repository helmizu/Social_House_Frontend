import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
//main
import Home from './components/home/Home';
import Thread from './components/thread/Thread';
import Community from './components/community/Community';

//second
import Dashboard from './components/home/Dashboard';

//icon
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeStack = createStackNavigator({
    Home: { screen: Home },
    Dashboard: { screen: Dashboard },
});

const SignedIn = createBottomTabNavigator(
    {
        Home: HomeStack,
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

                return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

export default SignedIn