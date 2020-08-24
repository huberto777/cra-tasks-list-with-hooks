import React from 'react';
import TaskList from './TaskList';
import Header from './Header';
import UserGreeting from './UserGreeting';
import CookieWarning from './CookieWarning';

function AuthApp({ onLogout }) {
  return (
    <>
      <Header>
        <UserGreeting onLogout={onLogout} />
      </Header>
      <TaskList />
      <CookieWarning />
    </>
  );
}

export default AuthApp;
