"use client";

import { Box, Grid, Stack } from "@mui/material";

import Button from "@/components/button/button";
import Ticker from "@/components/ticker/ticker";
import Video from "@/components/video/video";

export default function Home() {
  const stackStyles = { bgcolor: "#123018" };

  const heroSectionStyles = {};

  return (
    <>
      <Stack sx={stackStyles}>
        <Grid container sx={heroSectionStyles}>
          <Grid item xs={6}>
            <Box style={{ marginBottom: "100px", marginLeft: "100px" }}>
              <div
                style={{
                  color: "white",
                  fontSize: "20px",
                  lineHeight: "2em",

                  marginTop: "60px",
                  marginBottom: "20px",
                }}
              >
                Welcome to my creative realm! <br />
                I'm Divya Vandal, a Retail Visual Designer with over 7 years of
                expertise in visual merchandising and graphic design. My work is
                best known for its quirky, often dynamic & functional design
                style.
              </div>

              <div style={{}}>
                <Button>View Portfolio</Button>
              </div>

              <div style={{ marginTop: "60px" }}></div>

              <Video
                url="/videos/dynamic-windows"
                style={{ borderRadius: "20px 20px 20px 20px" }}
              />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ marginRight: "100px" }}>
              <Grid container justifyContent="flex-end" spacing="70px">
                <Grid item>
                  <div
                    style={{
                      backgroundColor: "#BADA55",
                      width: "45px",
                      height: "640px",
                      borderRadius: "10px",
                      color: "black",
                      marginTop: "140px",
                    }}
                  ></div>
                </Grid>

                <Grid item>
                  <img
                    src="/images/self.png"
                    style={{ borderRadius: "20px", marginTop: "50px" }}
                    width="450px"
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
