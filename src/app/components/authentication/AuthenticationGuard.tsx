"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const AuthenticationGuard = (props: { children: React.ReactNode }) => {
  const { isLoading, isAuthenticated, error, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      console.log("AuthenticationGuard: loginWithRedirect");
      loginWithRedirect({
        appState: { returnTo: window.location.pathname },
      });
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  return <>{isAuthenticated && props.children}</>;
};

export default AuthenticationGuard;
