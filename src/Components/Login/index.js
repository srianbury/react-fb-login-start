import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login";
import AuthenticationContext from "../Authentication";

const Login = () => {
  const { login } = useContext(AuthenticationContext);
  return (
    <div>
      <FacebookLogin
        appId={process.env.REACT_APP_FB_LOGIN_APP_ID}
        autoLoad={false}
        fields="name,email"
        callback={login}
      />
    </div>
  );
};

export default Login;
