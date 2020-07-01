import React from 'react';
import Loading from '@components/Loading';
import FetchError from '@components/FetchError';
import PropTypes from 'prop-types';

const FetchResult = ({
  loading, error, handlerId, children,
}) => {
  let Component;

  if (loading && loading[handlerId]) {
    Component = <Loading />;
  } else if (error && error[handlerId]) {
    Component = <FetchError />;
  } else if (children) {
    Component = children;
  } else {
    Component = null;
  }
  return (Component);
};

FetchResult.propTypes = {
  loading: PropTypes.object,
  error: PropTypes.object,
  handlerId: PropTypes.string,
  children: PropTypes.node,
};

FetchResult.defaultProps = {
  loading: {},
  error: {},
  handlerId: '',
  children: null,
};

export default FetchResult;
