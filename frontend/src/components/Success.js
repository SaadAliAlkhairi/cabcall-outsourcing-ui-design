import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";

import successImage from "../media/success.jpeg";

const Success = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#ededed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexWrap: {
            xs: "wrap",
            sm: "wrap",
            md: "wrap",
            lg: "nowrap",
            xl: "nowrap",
          },
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          paddingY: "150px",
          marginTop: "100px",
          marginX: "auto",
        }}
      >
        <Container sx={{ width: "fit-content" }}>
          <Box
            sx={{
              marginX: "auto",
              maxWidth: "595px",
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Welcome to Cab Call
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{ fontSize: "45px", fontWeight: "bold" }}
            >
              Empowering Your Business Growth
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "17px", letterSpacing: "1px" }}
            >
              With CabCall, we drive your business forward. Leave the management
              of your inbound calls to us, so you can focus on expanding your
              client base and nurturing your business. Enjoy around-the-clock
              professional call handling, all at a fraction of the cost compared
              to establishing your own in-house call center.
            </Typography>
          </Box>
        </Container>
        <Box
          sx={{
            marginX: "auto",
            marginTop: {
              xs: "100px",
              lg: "0px",
            },
          }}
        >
          <img
            src={successImage}
            style={{ maxHeight: "250px", borderRadius: "30px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Success;
