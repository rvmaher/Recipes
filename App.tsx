import React from 'react';
import MainNav from './src/navigation/MainNav';
import AppProvider from './src/context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <MainNav />
    </AppProvider>
  );
};

export default App;
