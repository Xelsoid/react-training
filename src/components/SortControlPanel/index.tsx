import * as React from 'react';
import './index.scss';

interface SortControlPanelProps {
    title: string;
    filterTitle?: string;
    children?: React.ReactNode;
};

export const SortControlPanel = ({
  title, children, filterTitle,
}: SortControlPanelProps) => (
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

