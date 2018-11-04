import React, { Component } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Theme from './styles/Theme';
import Header from './components/Header/Header';
import AddPicturesButton from './components/AddPictures/AddPicturesButton';
import RadioGroup from './components/RadioGroup';

export default () => (
  <ThemeProvider theme={Theme}>
    <View>
      <Header />
      <AddPicturesButton />
      <RadioGroup />
    </View>
  </ThemeProvider>
);
