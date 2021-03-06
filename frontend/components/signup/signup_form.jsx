import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: "",
      password_confirmation: "",
      cash_value: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  componentWillUpdate() {
    this.confirmPassword();
  }

  update() {
    return e => this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // delete user.password_confirmation;
    this.props.signup(user);
  }

  confirmPassword () {
    const pw = document.getElementById("pw");
    const pw_conf = document.getElementById("pw_conf");

    if(pw.value !== pw_conf.value) {
      pw_conf.setCustomValidity("Passwords Don't Match");
    } else {
      pw_conf.setCustomValidity('');
    }
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
    const {fname, lname, email, username, password, password_confirmation, cash_value} = this.state;
    return (
      <div className="form-container">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="row full-name">
            <input
            type="text"
            required
            name="fname"
            value={fname}
            onChange={this.update()}
            placeholder="First name"
            />
            <input
            type="text"
            required
            name="lname"
            value={lname}
            onChange={this.update()}
            placeholder="Last name"
            />
          </div>
          <div className="row">
            <input
            type="email"
            required
            name="email"
            value={email}
            onChange={this.update()}
            placeholder="Email Address"
            />
          </div>
          <div className="row">
            <input
              type="text"
              required
              name="username"
              value={username}
              onChange={this.update()}
              placeholder="Robinhold Username"
            />
          </div>
          <div className="row">
            <input
              type="password"
              required
              id="pw"
              name="password"
              value={password}
              onChange={this.update()}
              placeholder="Password (min. 6 characters)"
            />
            </div>
          <div className="row">
            <input
              type="password"
              required
              id="pw_conf"
              name="password_confirmation"
              value={password_confirmation}
              onChange={this.update()}
              placeholder="Confirm Password"
            />
          </div>
          <div className="row">
            <input
              type="number"
              required
              name="cash_value"
              value={cash_value}
              onChange={this.update()}
              placeholder="Initial cash value. (must be a number)"
            />
          </div>
          <p>
          Already have an account?
          <a href="#/signin"> Let's get you signed in.</a>
          </p>
          {this.renderErrors()}
          <div className="row button-group">
            <button>Sign Up</button>
            <button onClick={this.loginDemo}>Demo</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
