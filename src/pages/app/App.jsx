import React, { useState, Suspense } from 'react';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';

import Header from '../../components/header/Header';

const MainPage = React.lazy(() => import('../main'));
const Search = React.lazy(() => import('../search'));
const ArtWorkPage = React.lazy(() => import('../artWorkPage'));
const CreatorProfile = React.lazy(() => import('../creatorProfile'));
const MyProfile = React.lazy(() => import('../myProfile'));
import Spinner from '../../components/spinner';

import styles from './App.module.scss';

const App = () => {
  const [text, setText] = useState('');

  return (
    <div className={styles.app}>
      <Router>
        <Header text={text} setText={setText} />
        <Switch>
          <Route exact path="/">
            {text ? (
              <Redirect to="/search" />
            ) : (
              <Suspense fallback={<Spinner />}>
                <MainPage />
              </Suspense>
            )}
          </Route>
          <Route path="/artWorkPage">
            {text ? (
              <Redirect to="/search" />
            ) : (
              <Suspense fallback={<Spinner />}>
                <ArtWorkPage />
              </Suspense>
            )}
          </Route>
          <Route path="/creatorPage">
            {text ? (
              <Redirect to="/search" />
            ) : (
              <Suspense fallback={<Spinner />}>
                <CreatorProfile />
              </Suspense>
            )}
          </Route>
          <Route path="/myProfile">
            {text ? (
              <Redirect to="/search" />
            ) : (
              <Suspense fallback={<Spinner />}>
                <MyProfile />
              </Suspense>
            )}
          </Route>
          <Route path="/search">
            {text ? (
              <Suspense fallback={<Spinner />}>
                <Search />
              </Suspense>
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
