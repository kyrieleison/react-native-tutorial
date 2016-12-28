import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Pick up milk', complete: false },
        { id: 2, text: 'Grocery shopping', complete: false },
        { id: 3, text: 'Oil change', complete: true }
      ]
    };
  }

  render() {
    return (
      <View>
        { this.state.todos.map((todo) => {
          return <Todo key={todo.id} text={todo.text} />;
        }) }
      </View>
    );
  }
}
