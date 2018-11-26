import React, { Component } from 'react';
import { Text, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import { Button, Content, View } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from "react-native-router-flux";
import moment from 'moment';
import TodoCheckbox from '../common/TodoCheckbox';
import CountdownText from '../common/CountdownText';
import backgroundImage from "../../../images/fire.jpeg";

Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) { s = '0' + s; }
  return s;
}

class Focus extends Component {
  constructor(props) {
    super(props);
    const tasks = props.tasks;
    const latestIndex = tasks.findIndex(item => item.isChecked === false) || 0;
    if (latestIndex !== -1) {
      this.state = {
        tasks: tasks,
        currentTimerString: '25 : 00',
        remainingTime: null,
        isTimerStarted: false,
        currentTaskIsChecked: tasks[latestIndex].isChecked || false,
        currentTaskIndex: latestIndex || 0,
        currentTaskName: tasks[latestIndex].taskName || null,
        isAllTasksCompleted: false
      }
    } else {
      this.state = {
        tasks: tasks,
        currentTimerString: '25 : 00',
        remainingTime: null,
        isTimerStarted: false,
        currentTaskIsChecked: false,
        currentTaskIndex: 0,
        currentTaskName: null,
        isAllTasksCompleted: true
      }
    }
  }

  componentDidMount() {
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentWillReceiveProps(props) {
    const tasks = props.tasks;
    const latestIndex = tasks.findIndex(item => item.isChecked === false) || 0;
    if (latestIndex !== -1) {
      this.setState({
        currentTaskIsChecked: tasks[latestIndex].isChecked || false,
        currentTaskIndex: latestIndex || 0,
        currentTaskName: tasks[latestIndex].taskName || null,
        isAllTasksCompleted: false,
      });
    } else {
      this.setState({
        isAllTasksCompleted: true,
      })
    }
  }

  startTimer() {
    this.setState({
      isTimerStarted: true
    });
    this.interval = setInterval(() => {
      // fill in the blanks
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    // fill in the blanks
  }

  render() {
    return (<ImageBackground style={styles.backgroundImage} source={backgroundImage}>
      <StatusBar hidden />
      {/* fill in the blanks */}
    </ImageBackground>);
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    paddingTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 12
  },

  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  content: {
    backgroundColor: "rgba(0,0,0,.6)",
    width: '100%',
  },

  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20
  }

});

export default Focus;