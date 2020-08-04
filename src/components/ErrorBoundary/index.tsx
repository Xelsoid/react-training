import * as React from 'react';
import './index.scss';
import { ErrorBoundaryStateInt, ErrorBoundaryPropsInt } from '../../interface';

export class ErrorBoundary extends React.Component<ErrorBoundaryPropsInt, ErrorBoundaryStateInt> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className="error-boundary-wrapper">
          <div className="error-boundary">
            Something went wrong. layout is broken.
          </div>
        </div>
      );
    }

    return children;
  }
}
