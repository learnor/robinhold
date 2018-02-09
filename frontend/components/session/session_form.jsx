import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
      this.props.userInfo();
    }
  }

  handleChange (field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login"> log in instead</Link>;
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType } = this.props;
    const text = formType === 'login' ? "Log In" : "Sign Up";
    return (
      <div className='login-form-container'>
        <h2>{text}</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Robinhold!
          <br />
          please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>Username
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChange('username')}
                className="login-input"
              />
            </label>
            <label>Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                className="login-input"
              />
            </label>
            <br />
            <button>{text}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
