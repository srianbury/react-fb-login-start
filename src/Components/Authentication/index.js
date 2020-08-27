import React, { useState, createContext } from "react";
// import { DASHBOARD_AUTH_KEY } from "../../Constants";

const AuthenticationContext = createContext(null);
const Authentication = ({ children }) => {
  const [user, setUser] = useState({
    username: "Brian",
    access: [] // DASHBOARD_AUTH_KEY
  });
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
export { Authentication };
