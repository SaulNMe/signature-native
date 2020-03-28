import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthLoadingScreen from 'signature-app-v2/app/screens/AuthLoadingScreen';
import DetailScreen from 'signature-app-v2/app/screens/DetailScreen';
import DocumentDetailScreen from 'signature-app-v2/app/screens/DocumentDetailScreen';
import HomeScreen from 'signature-app-v2/app/screens/HomeScreen';
import LoginScreen from 'signature-app-v2/app/screens/LoginScreen';
import RejectScreen from 'signature-app-v2/app/screens/RejectScreen';
import SignatureScreen from "signature-app-v2/app/screens/SignatureScreen";

const MainStackNavigator = createStackNavigator({
    HomeScreen,
    DetailScreen,
    SignatureScreen,
    DocumentDetailScreen
}, {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
        header: null,
        headerMode: 'none'
    }
});

const ModalStack = createStackNavigator({
    MainStackNavigator,
    RejectScreen
}, {
    mode: 'modal',
    headerMode: 'none'
});

const AuthStackNavigator = createStackNavigator({
    LoginScreen
});



const MainNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator, 
    App: ModalStack
}, {
    initialRouteName: 'App',
    navigationOptions: {
        header: null,
        hedaerMode: 'none'
    },
});

export default createAppContainer(MainNavigator);