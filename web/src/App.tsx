import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';
import { configureStore, Config, runSagas } from 'core';
import theme from 'assets/theme';
import { Provider } from 'react-redux';
import Users from 'screens/users/containers/users.container';
import { hot } from 'react-hot-loader/root';
import './App.css';
Config.getInstance().setDevMode(process.env.NODE_ENV === 'development');
const { store } = configureStore();
runSagas(store);

class App extends Component {
  /**
   * Initial render
   */
  public render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Route path="/" exact={true} component={Users} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default (process.env.NODE_ENV === 'development' ? hot(App) : App);
