"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  const stackStyles = { bgcolor: "#123018" };

  const heroSectionStyles = {
    marginTop: "100px",
  };

  return (
    <>
      <Stack sx={stackStyles}>
        <Grid container sx={heroSectionStyles}>
          <Grid item xs={5}>
            <Box
              sx={{
                color: "white",
                fontSize: "22px",
                lineHeight: "2em",
                marginLeft: "100px",
              }}
            >
              Welcome to my creative realm! <br />
              I'm Divya Vandal, a Retail Visual Designer with over 7 years of
              expertise in visual merchandising and graphic design. My work is
              best known for its quirky, often dynamic & functional design
              style.
            </Box>
          </Grid>

          <Grid item xs={7}>
            <Box sx={{ marginRight: "100px" }}>
              <Grid container justifyContent="flex-end" spacing="70px">
                <Grid item>
                  <div
                    style={{
                      backgroundColor: "#BADA55",
                      width: "45px",
                      height: "840px",
                      borderRadius: "10px",
                    }}
                  ></div>
                </Grid>

                <Grid item>
                  <img
                    src="/images/self.png"
                    style={{ borderRadius: "20px" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
