import Expo from 'expo';
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import RootNavigation from './src/navigation/RootNavigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    ...Platform.select({
      android: {
        marginTop: 24
      }
    })
  },
});
