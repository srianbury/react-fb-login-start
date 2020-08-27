import React, { useContext } from "react";
import AuthenticationContext from "../Authentication";

const NotAuthorized = () => <div>No Access.</div>;
const withAuthorization = (
  Component,
  authKey,
  Fallback = NotAuthorized
) => props => {
  const { user } = useContext(AuthenticationContext);

  if (user.access.includes(authKey)) {
    return <Component {...props} />;
  }
  return <Fallback />;
};

export default withAuthorization;
