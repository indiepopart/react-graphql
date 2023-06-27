import { Box, Skeleton } from "@mui/material";

const PageLoader = () => {
  return (
    <Box>
      <Skeleton animation="wave" />
    </Box>
  );
}

export default PageLoader;