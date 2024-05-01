import React from 'react';
import {AppProvider} from './utils/states';
import {AppNavigator} from './navigator';

const App = () => {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
};

export default App;
