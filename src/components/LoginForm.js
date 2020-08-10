import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onLoginAttempt({
      email: this.emailInput.current.value,
      password: this.passwordInput.current.value,
    });
    this.emailInput.current.value = '';
    this.passwordInput.current.value = '';
  };

  render() {
    return (
      <div className="jumbotron bg-dark text-white">
        <form onSubmit={this.handleSubmit}>
          {this.props.errorMessage ? (
            <div className="alert alert-danger">{this.props.errorMessage}</div>
          ) : null}
          {/* <div className="form-row"> */}
          <div className="form-group row">
            <label htmlFor="email" className="col-form-label text-md-right col-md-2">
              Email:
            </label>
            <div className="col-md-8">
              <input
                ref={this.emailInput}
                type="text"
                defaultValue="hubert@example.com"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-form-label text-md-right col-md-2">
              Hasło:
            </label>
            <div className="col-md-8">
              <input
                ref={this.passwordInput}
                type="password"
                defaultValue="secret"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-8 offset-md-2">
              <button className="btn btn-block btn-outline-warning">Zaloguj się</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
