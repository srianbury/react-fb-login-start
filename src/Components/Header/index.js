import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthenticationContext from "../Authentication";

const HeaderContainer = () => {
  const { user } = useContext(AuthenticationContext);
  return <HeaderView username={user.username} />;
};

const HeaderView = ({ username }) => (
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
      <li>Username: {username}</li>
    </ul>
    <hr />
  </>
);

export default HeaderContainer;
