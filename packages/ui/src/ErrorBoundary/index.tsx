import type { ErrorInfo, ReactNode } from 'react';
import { Component } from 'react';

type ErrorBoundaryState = {
  error?: Error;
};

type ErrorBoundaryProps = {
  fallback?: ReactNode | ((args: any) => ReactNode);
  children?: ReactNode;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: undefined };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
    });

    console.error(errorInfo);
  }

  render() {
    const { fallback, children } = this.props;

    if (this.state.error) {
      if (!fallback) {
        return null;
      }

      if (typeof fallback === 'function') {
        return fallback({ error: this.state.error });
      }

      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
