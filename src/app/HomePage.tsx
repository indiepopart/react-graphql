"use client";

import { Box, Typography } from "@mui/material";
import CompanyTableContainer from "./components/companies/CompanyTableContainer";
import { useSearchParams } from "next/navigation";
import AuthenticationGuard from "./components/authentication/AuthenticationGuard";

const HomePage = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page") as string)
    : 1;

  console.log("HomePage");
  return (
    <AuthenticationGuard>
      <Box>
        <Typography variant="h4" component="h1">
          Companies
        </Typography>
      </Box>
      <Box mt={2}>
        <CompanyTableContainer page={page}></CompanyTableContainer>
      </Box>
    </AuthenticationGuard>
  );
};

export default HomePage;
