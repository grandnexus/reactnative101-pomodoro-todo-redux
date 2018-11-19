import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'native-base';
import { BarIndicator } from 'react-native-indicators';

import AppStyle from '../../../theme/styles/style';

const Loading = ({ message }) => (
  <View style={AppStyle.loading.view}>
    <View style={AppStyle.loading.indicator}>
      <BarIndicator color="white" count={5} size={45} />
    </View>
    <Text style={AppStyle.loading.text}>{message}</Text>
  </View>
);

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: 'Loading',
};

export default Loading;
