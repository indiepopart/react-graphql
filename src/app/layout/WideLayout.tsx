"use client";

import { Container } from "@mui/material";
import Auth0ProviderWithNavigate from "../components/authentication/Auth0ProviderWithNavigate";

const WideLayout = (props: { children: React.ReactNode }) => {
  return (
    <Auth0ProviderWithNavigate>
      <Container maxWidth="xl" sx={{ pb: 2 }}>
        {props.children}
      </Container>
    </Auth0ProviderWithNavigate>
  );
};

export default WideLayout;
