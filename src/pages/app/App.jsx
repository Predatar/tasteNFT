import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Header from '../../components/header/Header';
import MainPage from '../main';

import Search from '../search';
import SecondPage from '../second';
import styles from './App.module.scss';

const App = () => {
  const [text, setText] = useState('');

  return (
    <div className={styles.app}>
      <Router>
        <Header text={text} setText={setText} />
        <Switch>
          <Route exact path="/">
            {text ? <Redirect to="/search" /> : <MainPage />}
          </Route>
          <Route path="/second">
            <SecondPage />
          </Route>
          <Route path="/search">{text ? <Search /> : <Redirect to="/" />}</Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
