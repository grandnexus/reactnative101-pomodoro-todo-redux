import React, { Component } from 'react';
import { StyleSheet, StatusBar, ImageBackground, Text } from 'react-native';
import { Button, Content, View } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { Actions } from "react-native-router-flux";
import moment from 'moment';
import backgroundImage from "../../../images/fire.jpeg";

Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}

class Focus extends Component {
  constructor() {
    super();
    this.state = {
      currentTimerString: '25 : 00',
      remainingTime: null,
      isTimerStarted: false
    }
  }

  componentWillMount() {
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startTimer() {
    this.setState({
      isTimerStarted: true
    });
    this.interval = setInterval(() => {
      let pomodoroTime;
      if (this.state.remainingTime == null) {
        pomodoroTime = moment().add('25', 'minutes');
      } else {
        pomodoroTime = this.state.remainingTime.subtract('1', 'seconds');
      }
      const timeDiff = pomodoroTime.diff(moment());
      const timeRemainingTime = moment.duration(timeDiff, 'milliseconds');

      const displayTimeRemaining = `${(timeRemainingTime.minutes()).pad(2)} : ${(timeRemainingTime.seconds()).pad(2)}`;
      this.setState({
        currentTimerString: displayTimeRemaining,
        remainingTime: pomodoroTime
      });

      if (timeDiff < 0) {
        clearInterval(this.interval);
        this.setState({
          currentTimerString: '25 : 00',
          isTimerStarted: false,
          remainingTime: null
        });
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.setState({
      currentTimerString: '25 : 00',
      isTimerStarted: false,
      remainingTime: null
    });
  }

  render() {
    return (<ImageBackground style={styles.backgroundImage} source={backgroundImage}>
      <StatusBar hidden />
      <Content style={styles.content} contentContainerStyle={styles.contentContainer}>
        <View>
          <View style={styles.buttonGroup}>
            <Button style={styles.button} onPress={() => {
              if (this.state.isTimerStarted) {
                this.stopTimer();
              } else {
                this.startTimer();
              }
            }} transparent>
              <FontAwesome name="play-circle" size={32} color="white" />
            </Button>
            <Button style={styles.button} onPress={() => Actions.dashboard()} transparent>
              <FontAwesome name="dashboard" size={32} color="white" />
            </Button>
          </View>
          <Text style={styles.text}>{this.state.currentTimerString}</Text>
        </View>

      </Content>
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
    marginTop: -15,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'open-sans-bold',
    fontSize: 80
  }
});

export default Focus;