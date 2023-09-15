import React from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
  useTheme,
} from "@mui/material";

import MultiLingualIcon from "../media/multilingual.png";
import WellTrainedAgentsIcon from "../media/well-trained.png";
import QuickResponseIcon from "../media/quick-response.png";
import IndustryExpertsIcon from "../media/industry-experts.png";
import DataPrivacyIcon from "../media/data-privacy.png";

export const WhyChooseUs = () => {
  const theme = useTheme();
  return (
    <Container sx={{ minHeight: "500px" }}>
      <Box>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", marginTop: "160px", marginBottom: "30px" }}
        >
          Why Choose Us?
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: "50%", marginX: "auto" }}>
          Cab Call serves as an extension of your organization, delivering
          comprehensive call center services and all-in-one customer support.
        </Typography>
      </Box>
      <Grid
        container
        spacing={5}
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Grid item sm={6}>
          <Paper
            elevation={6}
            sx={{
              minHeight: "170px",
              backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingX: "10px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "contrast.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={MultiLingualIcon}
                style={{ maxHeight: "35px", marginRight: "20px" }}
              />
              Multilingual Support
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper
            elevation={6}
            sx={{
              minHeight: "170px",
              backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              paddingX: "10px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "contrast.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={WellTrainedAgentsIcon}
                style={{ maxHeight: "38px", marginRight: "12px" }}
              />
              Well-Trained Agents
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper
            elevation={6}
            sx={{
              minHeight: "170px",
              backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              paddingX: "10px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "contrast.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={QuickResponseIcon}
                style={{ maxHeight: "50px", marginRight: "12px" }}
              />
              Quick Response
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper
            elevation={6}
            sx={{
              minHeight: "170px",
              backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              paddingX: "10px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "contrast.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={IndustryExpertsIcon}
                style={{ maxHeight: "45px", marginRight: "20px" }}
              />
              Industry Experts
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper
            elevation={6}
            sx={{
              minHeight: "170px",
              backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: "30px",
              display: "flex",
              justifyContent: "center",
              paddingX: "10px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "contrast.main",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={DataPrivacyIcon}
                style={{ maxHeight: "40px", marginRight: "0px" }}
              />
              Data Privacy
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
