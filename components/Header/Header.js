import React from 'react';

import Header from './StyledHeader';
import Button from '../Button/Button';
import Text from '../common/Text/index';

export default () => (
  <Header>
    <Button text="Undo" isActive />
    <Text text="New Piece" />
    <Button text="Post" />
  </Header>
);
