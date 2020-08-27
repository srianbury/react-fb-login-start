import React, { useState, createContext } from "react";
import { INITIAL_USER_STATE } from "../../Constants";

const AuthenticationContext = createContext(null);
const Authentication = ({ children }) => {
  const [user, setUser] = useState(INITIAL_USER_STATE);
  function login(fbLoginResponse) {
    setUser(fbLoginResponse);
  }
  function logout() {
    setUser(INITIAL_USER_STATE);
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoggedIn: user === INITIAL_USER_STATE ? false : true,
        login,
        logout
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
export { Authentication };
