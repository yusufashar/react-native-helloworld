import React from 'react'
import {View, StyleSheet} from 'react-native';
import {AppNavigation} from './src/router/routerapp';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
