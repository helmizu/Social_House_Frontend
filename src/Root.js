import {createSwitchNavigator} from 'react-navigation';

//components
import AuthLoadingScreen from './AuthLoadingScreen';
import SignedIn from './SignedInRouter';
import SignedOut from './SignedOutRouter';

const Root = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        SignedIn: SignedIn,
        SignedOut: SignedOut,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);
export default Root;