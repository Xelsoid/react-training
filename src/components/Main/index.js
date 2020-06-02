import React from 'react';
import './index.scss';
import SortControlPanel from '@components/SortControlPanel';
import FilmsGallery from '@components/FilmGallery';
import MOCKED_DATA from '@root/src/mockedData/MOCKED_DATA';
import NotFound from '@components/NotFound';

const Main = () => (
  <div className="main-wrapper">
    <main className="main-">
      <SortControlPanel />
      <FilmsGallery films={MOCKED_DATA} />
      {/* <NotFound/> */}
    </main>
  </div>
);

export default Main;
