import React from "react";
import { Box, Typography } from "@mui/material";
import TestimonialCarousel from "./TestimonialCarousel";
import { useTheme } from "@emotion/react";

const Testimonial = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        backgroundRepeat: "no-repeat",
        paddingY: "40px",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          zIndex: 1,
          minHeight: "500px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
          <Typography
            variant="h3"
            sx={{
              padding: "5px",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Feedback
          </Typography>
          <Typography variant="subtitle1">
            Please read what our customer think of us.
          </Typography>
        </Box>
        <TestimonialCarousel />
      </Box>
    </Box>
  );
};

export default Testimonial;
