import React, { useContext } from "react";
import AuthenticationContext from "../Authentication";
import * as CONSTANTS from "../../Constants";

const NotAuthorized = () => <div>No Access.</div>;
const withAuthorization = (
  Component,
  authKey,
  Fallback = NotAuthorized
) => props => {
  const { user } = useContext(AuthenticationContext);

  let hasAccess = false;
  if (authKey === CONSTANTS.IS_LOGGED_IN) {
    hasAccess = user === CONSTANTS.INITIAL_USER_STATE ? false : true;
  } else {
    hasAccess = user && user.access && user.access.includes(authKey);
  }

  if (hasAccess) {
    return <Component {...props} />;
  }
  return <Fallback />;
};

export default withAuthorization;
