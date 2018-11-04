import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Text from './StyledButton';

const Button = ({ text, isActive }) => (
  <TouchableOpacity>
    <Text isActive={isActive}>{text}</Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  isActive: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default Button;
