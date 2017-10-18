import { StackNavigator } from 'react-navigation';
import { LoginScreen } from '../login';

const AppNavigation = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
      },
    },
  },
);

export { AppNavigation }; // eslint-disable-line import/prefer-default-export
