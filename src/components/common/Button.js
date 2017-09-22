import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
};

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;

  const { children, onPress } = props;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onPress: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: null,
  onPress: null,
};

export { Button }; // eslint-disable-line import/prefer-default-export
