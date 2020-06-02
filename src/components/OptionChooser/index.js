import React from 'react';
import './index.scss';

const OptionChooser = () => (
  <div className="option-chooser-wrapper">
    <input className="option-chooser__option" type="radio" id="title" name="searchType" value="title" />
    <label className="option-chooser__label option-chooser__label--active" htmlFor="title">TITLE</label>

    <input className="option-chooser__option" type="radio" id="genre" name="searchType" value="genre" />
    <label className="option-chooser__label" htmlFor="genre">GENRE</label>
  </div>
);

export default OptionChooser;
