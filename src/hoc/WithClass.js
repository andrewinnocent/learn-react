import React, {Component} from 'react';

// Example of a Higher Order Component that would wrap other component elements.
// The purpose of this one is to reuse div elements with className
// This is a normal javascript function returning a functional component

// const withClass = (WrappedComponent, className) => {
// {/* This is a normal javascript function returning a functional component */}
//   return (props) => (
//     <div className={className}> {/* When using this hoc, it expects 'classes' as a property, e.g., classes={Cat} */}
//       {/* Pass on the props as you get them with the spread operator here: {...props} This is needed when wrapping this hoc with different stateful components. */}
//       <WrappedComponent {...props}/>
//     </div>
//   );
// };

const withClass = (WrappedComponent, className) => {
  {/* This is a normal javascript function returning a stateful component. It's a nameless class */}
  const WithCLass = class extends Component {
    render () {
      return (
        <div className={className}> {/* When using this hoc, it expects 'classes' as a property, e.g., classes={Cat} */}
          {/* Pass on the props as you get them with the spread operator here: {...props} This is needed when using this hoc with different stateful components. */}
          <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
        </div>
      )
    }
  }
  return React.forwardRef((props, ref) => {
    return <WithCLass {...props} forwardedRef={ref} />
  })
};

export default withClass;