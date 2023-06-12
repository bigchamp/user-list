import React from 'react';
import AppNavigator from '@navigators/appNavigator';
import {QueryWrapper} from '@components';
import FlashMessage from 'react-native-flash-message';

function App(): JSX.Element {
  return (
    <QueryWrapper>
      <AppNavigator />
      <FlashMessage position="top" />
    </QueryWrapper>
  );
}

export default App;
