import React from 'react';

// Example of a Higher Order Component that would wrap other component elements.
// The purpose of this one is to reuse div elements with className

const withClass = (props) => (
  <div className={props.classes}> {/* When using this hoc, it expects 'classes' as a property, e.g., classes={Cat} */}
    {props.children} {/* When using this hoc, it expects element children */}
  </div>
);

export default withClass;