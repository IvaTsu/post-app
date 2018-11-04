import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';
import Text from '../common/Text/index';

const IMAGE_SRC = require('./../../assets/icon.png');

export default () => (
  <Container>
    <Inner>
      <Image source={IMAGE_SRC} />
      <Text text="Add pictures" />
    </Inner>
  </Container>
);

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: ${props => props.theme.top_background};
`;

const Inner = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`;
