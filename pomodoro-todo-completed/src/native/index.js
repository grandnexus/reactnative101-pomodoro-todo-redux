import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Stack } from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { StyleProvider } from 'native-base';
import { AppLoading, Font } from 'expo';
import getTheme from '../theme/components';
import AppTheme from '../theme/variables/material';

import Routes from './routes/index';
import Loading from './components/common/Loading';

class Root extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('../../assets/fonts/OpenSans-Bold.ttf'),
    });
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={this.props.store}>
        <PersistGate loading={<Loading />} persistor={this.props.persistor}>
          <StyleProvider style={getTheme(AppTheme)}>
            <Router>
              <Stack key="root">{Routes}</Stack>
            </Router>
          </StyleProvider>
        </PersistGate>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default Root;
