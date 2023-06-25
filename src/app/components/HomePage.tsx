"use client";

import { Box, Typography } from "@mui/material";
import CompanyTableContainer from "./companies/CompanyTableContainer";
import { useSearchParams } from "next/navigation";


const HomePage = () => {

  const searchParams = useSearchParams();
  const page = searchParams.get("page") ? parseInt(searchParams.get("page") as string) : 1;

  return (
    <>
      <Box>
        <Typography variant="h4" component="h1">
          Companies
        </Typography>
      </Box>
      <Box mt={2}>
        <CompanyTableContainer page={page}></CompanyTableContainer>
      </Box>
    </>
  );
}


export default HomePage;