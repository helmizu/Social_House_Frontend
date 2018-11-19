import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
//main
import Home from './components/home/Home';
import Thread from './components/thread/Thread';
import Community from './components/community/Community';

//second
import Dashboard from './components/home/Dashboard';
import DetailAgenda from './components/community/DetailAgenda';
import AddThread from './components/thread/AddThread';

//icon
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeStack = createStackNavigator({
    Home: { screen: Home },
    Dashboard: { screen: Dashboard },
});

const ThreadStack = createStackNavigator({
    Thread: { screen: Thread },
    AddThread : { screen : AddThread }
})

const CommunityStack = createStackNavigator({
    Community: { screen: Community },
    DetailAgenda : { screen : DetailAgenda }
})

CommunityStack.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];
    let navigationOptions = {};
  
    if (routeName === 'DetailAgenda') {
      navigationOptions.tabBarVisible = false;
    }
  
    return navigationOptions;
};

ThreadStack.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];
    let navigationOptions = {};
  
    if (routeName === 'AddThread') {
      navigationOptions.tabBarVisible = false;
    }
  
    return navigationOptions;
};
const SignedIn = createBottomTabNavigator(
    {
        Home: HomeStack,
        Thread: ThreadStack,
        Community: CommunityStack
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