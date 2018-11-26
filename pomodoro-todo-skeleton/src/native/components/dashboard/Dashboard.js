import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Content, Header, Left, Button, Icon, Body, Right } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import Spacer from '../common/Spacer';
import TodoCheckbox from '../common/TodoCheckbox';
import { Actions } from 'react-native-router-flux';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTasks: props.tasks,
      newTask: '',
    }
  }

  listTodoTasks() {
    return this.state.todoTasks.map(item => {
      return (
        <TodoCheckbox
          key={item.id}
          task={item.taskName}
          checked={item.isChecked}
          inverted={true}
          onPress={() => {
            // fill in the blanks
          }}
          onChangeText={(text) => {
            // fill in the blanks
          }}
          onDelete={() => {
            // fill in the blanks
          }}
        />
      );
    });
  }

  render() {
    return (<Container>
      <StatusBar hidden />
      {/* fill in the blanks */}
    </Container>);
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 20
  },
  leftButtonIcon: {
    color: 'black'
  }
});

export default Dashboard;