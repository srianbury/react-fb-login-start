import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthenticationContext from "../Authentication";

const HeaderContainer = () => {
  const { user, isLoggedIn, logout } = useContext(AuthenticationContext);
  const name = isLoggedIn ? user.name : null;
  return <HeaderView name={name} isLoggedIn={isLoggedIn} logout={logout} />;
};

const HeaderView = ({ name, isLoggedIn, logout }) => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <Name isLoggedIn={isLoggedIn} name={name} />
      {isLoggedIn && (
        <li>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </li>
      )}
    </ul>
    <hr />
  </>
);

const Name = ({ isLoggedIn, name }) => (
  <li>{isLoggedIn ? `Name: ${name}` : "Not Logged In"}</li>
);

export default HeaderContainer;
