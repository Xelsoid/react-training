import React from 'react';
import './index.scss';
import SortControlPanel from "@components/SortControlPanel";
import FilmsGallery from "@components/FilmGallery";
import MOCKED_DATA from "@root/src/mockedData/MOCKED_DATA";

const Main = () => (
    <div className="main-wrapper">
      <main className="main-">
        <SortControlPanel/>
        <FilmsGallery films={MOCKED_DATA}/>
      </main>
    </div>
);

export default Main;
