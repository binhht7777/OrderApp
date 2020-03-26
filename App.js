import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';


import AppNavigation from "./src/navigations/AppNavigation";

export default class App extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Oswald-Regular': require('./assets/fonts/Oswald-Regular.ttf'),
      'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'), // Chu Title in dam
      'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'), // dien giai dep chuan
      'Mukta-Regular': require('./assets/fonts/Mukta-Regular.ttf'), // dien giai dep chuan 
      'Pacifico-Regular': require('./assets/fonts/Pacifico-Regular.ttf'), //thu phap
      'DancingScript-Regular': require('./assets/fonts/DancingScript-Regular.ttf'),  // Chu Title thu phap
      'FjallaOne-Regular': require('./assets/fonts/FjallaOne-Regular.ttf'), // In Dam Dep
      'Bellefair-Regular': require('./assets/fonts/Bellefair-Regular.ttf'),
      'RobotoCondensed-Regular': require('./assets/fonts/RobotoCondensed-Regular.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        {
          this.state.fontLoaded ? (
            <AppNavigation />
          ) : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
