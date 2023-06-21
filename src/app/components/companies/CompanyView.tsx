import { Box, Grid, Typography } from "@mui/material";

interface CompanyViewProperties {
  company: CompanyData;
}

interface CompanyData {
  id: string;
  name: string;
  SIC: string;
  companyNumber: string;
  category: string;
  countryOfOrigin: string;
  mortgagesOutstanding: number;
  status: string;
}

const CompanyView = (props: CompanyViewProperties) => {
  const company = props.company;
  return (
    <>
      <Typography component="h1" variant="h4">
        {company.name} - {company.id}
      </Typography>
      <Box mt={4}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6">
              <strong>Company Number:&nbsp;</strong>
              {company.companyNumber}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6">
              <strong>SIC:&nbsp;</strong>
              {company.SIC}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6">
              <strong>Category:&nbsp;</strong>
              {company.category}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6">
              <strong>Country of Origin:&nbsp;</strong>
              {company.countryOfOrigin}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6">
              <strong>Mortgages Outstanding:&nbsp;</strong>
              {company.mortgagesOutstanding}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h6">
              <strong>Status:&nbsp;</strong>
              {company.status}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CompanyView;
