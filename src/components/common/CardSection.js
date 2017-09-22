import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

const CardSection = props => <View style={styles.containerStyle}>{props.children}</View>;

CardSection.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export { CardSection }; // eslint-disable-line import/prefer-default-export
