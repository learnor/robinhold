import React from 'react';

const Logout = ({ currentUser,logout }) => (
  currentUser ?
  <li> <a href= "#" onClick={logout}>Logout</a></li> : "not login"
);

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }
  //
  // componentDidMount() {
  //   this.props.getUserInfo();
  // }

  render() {
    const {currentUser, logout} = this.props;

    return (
      <nav className="navbar">
        <div className="navbar-header">
          <a className="navbar-brand" >
            <img src="72870.png" />
          </a>
        </div>
        <div className="navbar-search">
          <input type="search" placeholder="Search for stocks" />
        </div>
        <ul className="navbar-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/account">Account</a></li>
          <Logout logout={logout} currentUser={currentUser} />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
