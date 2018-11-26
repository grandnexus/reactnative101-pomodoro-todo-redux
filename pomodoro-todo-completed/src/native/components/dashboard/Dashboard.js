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
            this.props.updateTask({
              id: item.id,
              taskName: item.taskName,
              isChecked: !item.isChecked,
              timeCompleted: null,
            });
          }}
          onChangeText={(text) => {
            this.props.updateTask({
              id: item.id,
              taskName: text,
              isChecked: false,
              timeCompleted: null
            })
          }}
          onDelete={() =>
            this.props.deleteTask({
              id: item.id
            })
          }
        />
      );
    });
  }

  render() {
    return (<Container>
      <StatusBar hidden />
      <Header transparent>
        <Left>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name='arrow-back' style={styles.leftButtonIcon} />
          </Button>
        </Left>
        <Body />
        <Right>
        </Right>
      </Header>
      <Content style={styles.content} padder>
        {this.listTodoTasks()}
        <TodoCheckbox
          task={this.state.newTask}
          isInputField={true}
          inverted={true}
          onChangeText={(text) => {
            this.setState({
              newTask: text
            });
            console.log(text);
          }}
          onSubmitEditing={() => {
            if (this.state.newTask.length > 0) {
              this.props.addTask({
                id: this.props.tasks.length,
                taskName: this.state.newTask,
                isChecked: false,
                timeCompleted: null
              })
              this.setState({
                newTask: ''
              });
            }
          }}
        />
        <Spacer size={50} />
      </Content>
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