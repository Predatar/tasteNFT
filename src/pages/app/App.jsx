import React from 'react';
import Header from '../../components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from '../main';

import styles from './App.module.scss';
import SecondPage from '../second';

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/second">
            <SecondPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
