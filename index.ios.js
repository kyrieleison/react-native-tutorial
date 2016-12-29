import React from 'react';
import { AppRegistry, NavigatorIOS, StyleSheet, Text, View } from 'react-native';
import TodoList from './src/components/TodoList.js';

export default class ReactNativeTutorial extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Todo List',
          component: TodoList
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ReactNativeTutorial', () => ReactNativeTutorial);
