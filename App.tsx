import React from 'react';
import {Provider as RTKProvider} from 'react-redux';
import MainNav from '@navigation/MainNav';
import store from '@store/store';

const App = () => {
  return (
    <RTKProvider store={store}>
      <MainNav />
    </RTKProvider>
  );
};

export default App;
