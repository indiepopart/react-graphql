"use client";

import { Container } from "@mui/material";

const ViewLayout = (props: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="md" sx={{ pb: 2 }}>
      {props.children}
    </Container>
  );
};

export default ViewLayout;
