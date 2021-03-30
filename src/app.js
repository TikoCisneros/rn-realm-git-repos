import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeArea } from './components/common/containers';
import Main from './screens/main';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeArea>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Main />
    </SafeArea>
  );
};

export default App;
