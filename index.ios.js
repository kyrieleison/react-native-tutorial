import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import TodoList from './src/components/TodoList.js';

export default class ReactNativeTutorial extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoList />
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

AppRegistry.registerComponent('ReactNativeTutorial', () => ReactNativeTutorial);
