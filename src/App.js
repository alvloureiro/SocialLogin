import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import Firestack from 'react-native-firestack';
import { Header, Card } from 'react-native-elements';

const firestack = new Firestack();

const style = {
  headerStyle: {
    flex: 1,
  },
  loginButtonStyle: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <Header style={style.headerStyle} centerComponent={{ text: 'Social Login', style: { fontSize: 22, color: '#1d4e89' } }} />

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

export default App;
