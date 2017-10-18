import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { Card } from 'react-native-elements';
import Firestack from 'react-native-firestack';

const firestack = new Firestack();

const style = {
  headerStyle: {
    flex: 1,
    fontSize: 22,
    color: '#1d4e89',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class LoginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={style.headerStyle}>Social Login with Facebook</Text>

        <Card style={style.loginButtonStyle}>
          <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('login has error');
              } else if (result.isCancelled) {
                console.log('login was cancelled');
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    firestack.auth.signInWithProvider('facebook', data.accessToken, '')
                      .then(
                        (user) => {
                          console.log('User Logged!');
                          console.log(user);
                        },
                      );
                  },
                );
              }
            }}
            onLogoutFinished={() => console.log('logout')}
          />
        </Card>
      </View>
    );
  }
}

export { LoginScreen }; // eslint-disable-line import/prefer-default-export
