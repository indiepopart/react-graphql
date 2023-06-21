"use client";

import { Box, Button, Typography } from "@mui/material";
import CompanyTable from "./companies/CompanyTable";
import CompanyTableContainer from "./companies/CompanyTableContainer";

export default function HomePage() {
  return (
    <div>
      <Typography variant="h4" component="h1">
        Companies
      </Typography>
      <Box mt={2}>
        <CompanyTableContainer></CompanyTableContainer>
      </Box>
    </div>
  );
}
