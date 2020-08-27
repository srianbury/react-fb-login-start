import React, { useState, useEffect, createContext } from "react";
import * as CONSTANTS from "../../Constants";

const AuthenticationContext = createContext(null);
const Authentication = ({ children }) => {
  const [user, setUser] = useState(CONSTANTS.INITIAL_USER_STATE);
  const [loadingUser, setLoadingUser] = useState(true);

  function login(fbLoginResponse) {
    /*
      fbLoginResponse: {
        accessToken: string,
        data_access_expiration_time: int,
        email: string,
        expiresIn: int,
        graphDomain: string, // "Facebook"
        id: string,
        name: string,
        signedRequest: string,
        userId: string // same as id
      }
    */
    localStorage.setItem(
      CONSTANTS.USER_INFO_LOCAL_STORAGE_KEY,
      JSON.stringify(fbLoginResponse)
    );
    setUser(fbLoginResponse);
  }

  function logout() {
    setUser(CONSTANTS.INITIAL_USER_STATE);
    localStorage.removeItem(CONSTANTS.USER_INFO_LOCAL_STORAGE_KEY);
  }

  useEffect(() => {
    const user = localStorage.getItem(CONSTANTS.USER_INFO_LOCAL_STORAGE_KEY);
    if (user) {
      login(JSON.parse(user));
    }
    setLoadingUser(false);
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoggedIn: user === CONSTANTS.INITIAL_USER_STATE ? false : true,
        login,
        logout
      }}
    >
      {loadingUser ? <LoadingUserView /> : children}
    </AuthenticationContext.Provider>
  );
};

const LoadingUserView = () => <div>Loading...</div>;

export default AuthenticationContext;
export { Authentication };
