import React, { Component } from 'react';
import { LoginButton } from 'react-native-fbsdk';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>SOCIAL LOGIN!</Text>
        <LoginButton />
      </View>
    );
  }
}

export default App;
