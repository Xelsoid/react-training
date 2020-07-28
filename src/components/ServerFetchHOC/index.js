import React from 'react';
import PropTypes from 'prop-types';

function ServerFetchHOC(WrappedComponent, store, matchURLandDoFetch) {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    UNSAFE_componentWillMount() {
      const { match } = this.props;
      matchURLandDoFetch(store, match);
    }

    render() {
      return <WrappedComponent />;
    }
  };
}

ServerFetchHOC.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default ServerFetchHOC;
