import React, { Component } from 'react';

// Very useful for code in production rather than in developer mode which we are currently working on localhost.

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // similar to try catch block in java
    componentDidCatch(error, info) {
        this.setState({ hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error has occurred</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;