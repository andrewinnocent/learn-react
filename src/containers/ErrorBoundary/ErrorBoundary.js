import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    // React method that receives the error and relevant info 
    this.setState({hasError: true, errorMessage: error})
  }

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    } else {
      return this.props.children; {/* children refers to the components that will be wrapped by the ErrorBoundary class*/}
    }
  }
}

export default ErrorBoundary;