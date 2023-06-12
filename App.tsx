import React from 'react';
import AppNavigator from '@navigators/appNavigator';
import {QueryWrapper} from '@components';

function App(): JSX.Element {
  return (
    <QueryWrapper>
      <AppNavigator />
    </QueryWrapper>
  );
}

export default App;
