import React from 'react';

function Button({ props, children }) {
  return <button {...props}>{children}</button>;
}

export default Button;
