"use client";

import { Container } from "@mui/material";

const WideLayout = (props: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="xl" sx={{ pb: 2 }}>
      {props.children}
    </Container>
  );
};

export default WideLayout;
