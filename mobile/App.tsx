/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { configureStore, runSagas } from 'core';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import RootNavigation from '@navigation/root.navigation';
import { theme } from './src/assets/styles/theme';
import './src/translation/i18n'; // Need to be bundled
const store = configureStore(__DEV__);
runSagas(store);

export default () => (
  <StoreProvider store={store}>
    <PaperProvider theme={theme}>
      <RootNavigation />
    </PaperProvider>
  </StoreProvider>
);
