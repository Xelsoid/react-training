import React from 'react';
import { ERRORS, LOADINGS } from '@root/src/services/constants';
import Loading from '@components/Loading';
import FetchError from '@components/FetchError';
import PropTypes from 'prop-types';

const FetchResult = ({ loading, error, children }) => {
  let Component;

  if (loading && (loading[LOADINGS.MOVIE_LOADING] || loading[LOADINGS.MOVIES_LOADING])) {
    Component = <Loading />;
  } else if (error && error[ERRORS.MOVIE_ERROR]) {
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
  children: PropTypes.node,
};

FetchResult.defaultProps = {
  loading: {},
  error: {},
  children: null,
};

export default FetchResult;
