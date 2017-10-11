import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
};

const Container = props => <View style={styles.containerStyle}>{props.children}</View>;

Container.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element,
  ).isRequired,
};

export { Container }; // eslint-disable-line import/prefer-default-export
