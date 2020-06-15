import React from 'react';
import TaskList from './TaskList';
import Header from './Header';
import UserGreeting from './UserGreeting';

function AuthApp({ onLogout }) {
  return (
    <>
      <Header>
        <UserGreeting onLogout={onLogout} />
      </Header>
      <TaskList />
    </>
  );
}

export default AuthApp;
