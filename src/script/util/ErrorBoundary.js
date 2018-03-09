import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        console.log(error);

        // You can also log the error to an error reporting service
        // Sentry.io ? Some looking system is required
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="ohNo">
                    <h1>Something went wrong.</h1>
                    <p>Looks like we are having an issue please try refreshing your browser if the problem still presists please contact our team! Thank You.</p>
                </div>
            );
        }
        return this.props.children;
    }
}
