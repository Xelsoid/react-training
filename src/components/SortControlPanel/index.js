import React from 'react';
import './index.scss';
import OptionChooser from '@components/OptionChooser';

const SortControlPanel = () => (
  <div className="sort-control-panel-wrapper">
    <strong className="sort-control-panel__result-amount">7 movies found</strong>
    <div className="sort-control-panel__filter">
      <span className="sort-control-panel__filter-title">SORT BY</span>
      <OptionChooser />
    </div>
  </div>
);

export default SortControlPanel;
