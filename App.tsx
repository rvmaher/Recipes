import React from 'react';
import {Provider as RTKProvider} from 'react-redux';
import MainNav from './src/navigation/MainNav';
import store from './src/store/store';

const App = () => {
  return (
    <RTKProvider store={store}>
      <MainNav />
    </RTKProvider>
  );
};

export default App;
