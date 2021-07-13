import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Button.css'
const SignInButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
  <button className="button1" onClick={() => loginWithRedirect()}>SIGN UP</button>
  )
  )
};

export default SignInButton;