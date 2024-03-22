"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  const stackStyles = { bgcolor: "#123018" };

  const heroSectionStyles = {
    height: "1000px",
    marginLeft: { xs: "10px", sm: "20px", md: "50px", lg: "70px" },
    marginRight: { xs: "10px", sm: "20px", md: "50px", lg: "70px" },
  };

  return (
    <>
      {/* <Stack sx={stackStyles}>
        <Grid container sx={heroSectionStyles}>
          <Grid item xs={6}>
            <Typography variant="h6" color="white">
              Welcome to my creative realm! I'm Divya Vandal, a Retail Visual
              Designer with over 7 years of expertise in visual merchandising
              and graphic design. My work is best known for its quirky, often
              dynamic & functional design style.
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Box>
              <img src="/images/self.png" />
            </Box>
          </Grid>
        </Grid>
      </Stack> */}
    </>
  );
}
