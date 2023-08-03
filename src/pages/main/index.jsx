import React, { lazy } from 'react';

import Main from './main';
import ArtWorkSection from './artWorkSection';
/* import FeaturedCreators from '../../components/featuredCreators'; */

const FeaturedCreators = lazy(() => import('../../components/featuredCreators'));

const MainPage = () => {
  return (
    <>
      <Main />
      <ArtWorkSection />
      <FeaturedCreators mt={true} />
    </>
  );
};

export default MainPage;
