import React from 'react';
import PropTypes from 'prop-types';

import StyledText from './styles';

const Text = ({ text }) => <StyledText>{text}</StyledText>;

Text.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Text;
