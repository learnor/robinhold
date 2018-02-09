import React, {Fragment} from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentWillUnmount () {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  renderErrors() {
    return (
      <div className="error-info">
        {this.props.errors.map((error, i) => (
          <p key={`error-${i}`}>
            <i className="fas fa-exclamation-circle"></i>
            {error}
          </p>
        ))}
      </div>
    );
  }

  loginDemo(e){
    e.preventDefault();
    this.state = {
      username: "demo_user",
      password: "password"
    };
    const user = this.state;
    this.props.login(user);
  }

  render() {
    return (
      <div className="form-container">
      <form className="login-form" onSubmit={this.handleSubmit}>
        <header className="form-header">Welcome to Robinhold</header>
        <div className="form-vertical">
          <div className="form-group">
            <label>
              <div>Username</div>
              <div>
                <input
                  type="text"
                  required
                  name="username"
                  value={this.state.username}
                  onChange={this.update('username')}
                />
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              <div>Password</div>
              <div>
                <input
                  type="password"
                  required
                  name="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </div>
            </label>
          </div>
          <p>
          Don't have an account?
          <a href="#/signup"> Let's get you signed up.</a>
          </p>
          {this.renderErrors()}
          <div className="button-group">
            <button type="submit" id="login">Sign In</button>
            <button onClick={this.loginDemo}>Demo</button>
          </div>
        </div>

      </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
