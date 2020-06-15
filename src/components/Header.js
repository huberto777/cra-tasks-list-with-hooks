import React from 'react';

function Header({ children }) {
  if (children.length < 1) {
    throw new Error('Header has to have at least one child!');
  }
  return <header className="card bg-warning text-white">{children}</header>;
}

export default Header;
