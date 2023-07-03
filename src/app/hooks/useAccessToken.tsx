"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { useCallback, useState } from "react";
import { setInterceptors } from "../services/auth";

export const useAccessToken = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState("");

  // The function changes everytime the accessToken changes
  // Causing a double execute only when the accessToken changes
  const saveAccessToken = useCallback(async () => {
    if (isAuthenticated) {
      try {
        const tokenValue = await getAccessTokenSilently();
        if (accessToken !== tokenValue) {
          setInterceptors(tokenValue);
          setAccessToken(tokenValue);
        }
      } catch (err) {
        // Inactivity timeout
        console.log("getAccessTokenSilently error", err);
      }
    }
  }, [getAccessTokenSilently, isAuthenticated, accessToken]);

  return {
    saveAccessToken,
  };
};
