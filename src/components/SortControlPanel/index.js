import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const SortControlPanel = ({
  title, children, filterTitle,
}) => (
  <div className="sort-control-panel-wrapper">
    <strong className="sort-control-panel__result-amount">{title}</strong>
    {
      children
        ? (
          <div className="sort-control-panel__filter">
            <span className="sort-control-panel__filter-title">{filterTitle}</span>
            {children}
          </div>
        )
        : null
    }
  </div>
);

SortControlPanel.propTypes = {
  title: PropTypes.string,
  filterTitle: PropTypes.string,
  children: PropTypes.node,
};

SortControlPanel.defaultProps = {
  title: '',
  filterTitle: 'Sort by',
  children: null,
};

export default SortControlPanel;
