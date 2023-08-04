import React from 'react';
import { Helmet } from 'react-helmet';

import Main from './main';
import ArtWorkSection from './artWorkSection';
import FeaturedCreators from '../../components/featuredCreators';

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Main page - TasteNFT</title>
      </Helmet>
      <Main />
      <ArtWorkSection />
      <FeaturedCreators mt={true} />
    </>
  );
};

export default MainPage;
