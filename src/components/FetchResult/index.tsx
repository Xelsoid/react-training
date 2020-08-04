import * as React from 'react';
import { Loading } from '@components/Loading/index';
import { FetchError } from '@components/FetchError/index';
import { FetchResultInt } from '../../interface';

export const FetchResult = ({
  loading, error, handlerId, children,
}: FetchResultInt) => {
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
