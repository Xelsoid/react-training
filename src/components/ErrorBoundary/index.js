import React from 'react';
import './index.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-wrapper">
          <div className="error-boundary">
            Something went wrong. layout is broken.
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
