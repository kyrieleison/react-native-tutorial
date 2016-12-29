import React from 'react';
import { ListView, View } from 'react-native';
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([
        { id: 1, text: 'Pick up milk', complete: false },
        { id: 2, text: 'Grocery shopping', complete: false },
        { id: 3, text: 'Oil change', complete: true },
      ])
    });
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(todo) => {
          return (
            <Todo key={todo.id} text={todo.text} />
          );
        } }
      />
    );
  }
}
