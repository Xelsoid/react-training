import * as React from 'react';
import { Loading } from '@components/Loading/index';
import { FetchError } from '@components/FetchError/index';

interface FetchResultProps {
    loading: Object;
    error: Object;
    handlerId: string;
    children: React.ReactNode;
}

export const FetchResult = ({
  loading, error, handlerId, children,
}: FetchResultProps) => {
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

