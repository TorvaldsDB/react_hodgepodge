import React, { Component } from "react";

function UserGreeting(props) {
  return <h1>Welcome Back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

// function LoginButton(props) {
//   return <button onClick={props.handleLoginClick}>Login</button>;
// }

// function LoginButton(props) {
//   const { handleLoginClick } = props;
//   return <button onClick={props.handleLoginClick}>Login</button>;
// }

function LoginButton({ handleLoginClick }) {
  return <button onClick={handleLoginClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.handleLogoutClick}>Logout</button>;
}

class LoginControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton handleLogoutClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton handleLoginClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
