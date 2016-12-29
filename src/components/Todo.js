import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Todo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.todo}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  todo: {
    fontSize: 20,
    marginLeft: 15,
    padding: 20,
  },
});
