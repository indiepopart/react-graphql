"use client"

import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { useRouter } from "next/navigation";
import React from "react";


const Auth0ProviderWithNavigate = (props: { children: React.ReactNode }) => {

  const router = useRouter();

  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN || "";
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || "";
  const redirectUri = process.env.NEXT_PUBLIC_AUTH0_CALLBACK_URL || "";

  const onRedirectCallback = (appState?: AppState) => {
    console.log("appState", appState);
    router.push(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <>{props.children}</>
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;