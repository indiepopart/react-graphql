'use client'

import { Button } from "@mui/material";
import CompanyTable from "./companies/CompanyTable";
import CompanyTableContainer from "./companies/CompanyTableContainer";

export default function HomePage() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      <CompanyTableContainer></CompanyTableContainer>
    </div>
  );
}
