import { Box, Grid, Typography } from "@mui/material";

interface CompanyViewProperties {
  company: CompanyData;
}

interface OwnerData {
  id: string;
  name: string;
}
interface PropertyData {
  address: string;
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
  incorporationDate: string;
  controlledBy: OwnerData[];
  owns: PropertyData[];
}

const CompanyView = (props: CompanyViewProperties) => {
  const company = props.company;
  return (
    <Box mt={4}>
      <Box>
        <Typography component="h1" variant="h5">
          Company
        </Typography>
      </Box>
      <Box mt={4} mb={4}>
        <Typography component="h2" variant="h4">
          {company.name}
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Id #:&nbsp;</strong>
              {company.id}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Company Number:&nbsp;</strong>
              {company.companyNumber}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>SIC:&nbsp;</strong>
              {company.SIC}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Category:&nbsp;</strong>
              {company.category}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Country of Origin:&nbsp;</strong>
              {company.countryOfOrigin}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Mortgages Outstanding:&nbsp;</strong>
              {company.mortgagesOutstanding}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Status:&nbsp;</strong>
              {company.status}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Incorporation Date:&nbsp;</strong>
              {company.incorporationDate}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Controlled by:&nbsp;</strong>
              {company.controlledBy.map((owner) => owner.name).join(", ")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Owned properties:&nbsp;</strong>
              <Box mt={2}>
                {company.owns.map((property) => (
                  <Typography>{property.address}</Typography>
                ))}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CompanyView;
