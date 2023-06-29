"use client";

import backendAPI from "@/app/services/base";
import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useEffect, useState } from "react";

let requestInterceptor: number;
let responseInterceptor: number;

const AuthenticationGuard = (props: { children: React.ReactNode }) => {
  const {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();

  const [isReady, setIsReady] = useState(false);

  console.log("AuthenticationGuard", isLoading, isAuthenticated, isReady);

  // It is working but it should not be here

  const clearInterceptors = () => {
    backendAPI.interceptors.request.eject(requestInterceptor);
    backendAPI.interceptors.response.eject(responseInterceptor);
  };

  const setInterceptors = useCallback(() => {
    clearInterceptors();

    requestInterceptor = backendAPI.interceptors.request.use(
      // @ts-expect-error
      async function (config) {
        const accessToken = await getAccessTokenSilently();
        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
      function (error) {
        console.log("request interceptor error", error);
        return Promise.reject(error);
      }
    );

    setIsReady(true);

  }, [getAccessTokenSilently, setIsReady]);

  useEffect(() => {
    if (isAuthenticated) {
      setInterceptors();
    }
  }, [setInterceptors, isAuthenticated]);

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
  return <>{isReady && props.children}</>;
};

export default AuthenticationGuard;
