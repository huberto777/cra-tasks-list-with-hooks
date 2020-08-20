import React from 'react';
import jwt from 'jsonwebtoken';
import ErrorBoundary from './components/ErrorBoundary';
import AuthContext from './context/AuthContext';
import AuthAPI from './api/FakeAuthApi';
import LoginForm from './components/LoginForm';

const AuthApp = React.lazy(() => import('./components/AuthApp'));

class App extends React.Component {
  state = {
    accessToken: null,
    previousLoginAttemptFailed: false,
    expiresIn: 3600000,
  };

  componentDidMount() {
    this.getAccessToken();
    this.intID = setInterval(() => {
      this.handleLogout();
    }, this.state.expiresIn);
  }

  componentWillUnmount() {
    clearInterval(this.intID);
  }

  getAccessToken() {
    this.setState({
      accessToken: localStorage.getItem('accessToken'),
      previousLoginAttemptFailed: false,
    });
  }
  getUserExpires(token) {
    const decodedToken = jwt.decode(token);
    return decodedToken;
  }

  isUserLoggedIn() {
    return !!this.state.accessToken;
  }

  handleLoginAttempt = (credentials) => {
    AuthAPI.login(credentials)
      .then(({ accessToken }) => {
        localStorage.setItem('accessToken', accessToken);
        this.getAccessToken();
      })
      .catch(() => {
        this.setState({
          accessToken: null,
          previousLoginAttemptFailed: true,
        });
      });
  };

  handleLogout = () => {
    this.setState({
      accessToken: localStorage.removeItem('accessToken'),
      previousLoginAttemptFailed: false,
    });
  };

  render() {
    return (
      <div className="App">
        <ErrorBoundary message="Coś nie działa w całej aplikacji">
          {this.isUserLoggedIn() ? (
            <AuthContext.Provider value={{ accessToken: this.state.accessToken }}>
              <React.Suspense fallback="... Loading">
                <AuthApp onLogout={this.handleLogout} />
              </React.Suspense>
            </AuthContext.Provider>
          ) : (
            <LoginForm
              errorMessage={
                this.state.previousLoginAttemptFailed ? 'Nie udało się zalogować' : null
              }
              onLoginAttempt={this.handleLoginAttempt}
            />
          )}
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
