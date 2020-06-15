import React from 'react';
import OptionChooser from '@components/OptionChooser';
import PropTypes from 'prop-types';

import './index.scss';

const SortControlPanel = ({
  total, optionsConfig, getAndSetSortBy, defaultSortValue,
}) => (
  <div className="sort-control-panel-wrapper">
    <strong className="sort-control-panel__result-amount">{`${total} movies found`}</strong>
    <div className="sort-control-panel__filter">
      <span className="sort-control-panel__filter-title">SORT BY</span>
      <OptionChooser
        optionsConfig={optionsConfig}
        defaultValue={defaultSortValue}
        onChangeCallback={getAndSetSortBy}
      />
    </div>
  </div>
);

SortControlPanel.propTypes = {
  total: PropTypes.number.isRequired,
  optionsConfig: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAndSetSortBy: PropTypes.func.isRequired,
  defaultSortValue: PropTypes.string.isRequired,
};

export default SortControlPanel;
