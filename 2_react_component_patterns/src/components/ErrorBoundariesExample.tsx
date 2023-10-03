import {Component, ErrorInfo, PropsWithChildren, ReactNode} from 'react';

interface IErrorBoundaryExampleState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundaryExample extends Component<PropsWithChildren<{}>, IErrorBoundaryExampleState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): IErrorBoundaryExampleState {
        return {hasError: true, error, errorInfo: null};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({
            error,
            errorInfo
        });
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong.</h1>

                    <details>
                        <summary>
                            Details
                        </summary>

                        {this.state.error && this.state.error.toString()}

                        <br/>

                        {this.state.errorInfo?.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundaryExample;