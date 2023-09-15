import React from 'react'
import { Container, Paper, Typography, Grid, Box, useTheme } from '@mui/material'

import CostEffectiveIcon from '../media/cost-effective.png';
import AvailabilityIcon from '../media/24-7.png';
import CallIcon from '../media/call-icon.png';
import MultiChannelIcon from '../media/multi-channel.png';


export const Offers = () => {
    const theme = useTheme();
  return (
    <Container sx={{minHeight: '500px'}}>
        <Box>
            <Typography variant='h2' sx={{fontWeight: 'bold', marginTop: '160px', marginBottom: '30px'}}>
                What We Offer
            </Typography>
            <Typography variant='body1' sx={{maxWidth: '50%', marginX: 'auto'}}>
            Cab Call serves as an extension of your organization, delivering comprehensive call center services and all-in-one customer support.
            </Typography>
        </Box>
        {/* <Paper sx={{bgcolor: 'primary.main'}}></Paper> */}
        <Grid container spacing={5} sx={{marginTop: '50px'}}>
            <Grid item sm={6}>
                <Paper elevation={6} sx={{minHeight: '170px',
                //  backgroundColor: 'secondary.main',
                 backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                 borderRadius: '30px', 
                //  padding: '0px', 
                 display: 'flex', 
                 justifyContent: 'center', 
                 paddingX: '10px',
                 alignItems: 'center'}}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold'/*, fontSize: '20px'*/, color: 'contrast.main', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={CostEffectiveIcon} style={{maxHeight: '50px', marginRight: '5px'}}/>Cost Effectiveness</Typography>
                </Paper>
            </Grid>
            <Grid item sm={6}>
                <Paper elevation={6} sx={{minHeight: '170px', 
                // backgroundColor: 'secondary.main', 
                backgroundImage: `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: '30px', 
                // padding: '0px', 
                display: 'flex', 
                justifyContent: 'center', 
                paddingX: '10px',
                alignItems: 'center'}}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'contrast.main', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={AvailabilityIcon} style={{maxHeight: '50px', marginRight: '12px'}}/>24/7 Support Staff</Typography>
                </Paper>
            </Grid>
            <Grid item sm={6}>
                <Paper elevation={6} sx={{minHeight: '170px', 
                // backgroundColor: 'secondary.main', 
                backgroundImage: `linear-gradient(to left, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                borderRadius: '30px', 
                // padding: '0px', 
                display: 'flex', 
                justifyContent: 'center', 
                paddingX: '30px',
                alignItems: 'center'}}>
                    <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'contrast.main', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={CallIcon} style={{maxHeight: '38px', marginRight: '20px'}}/>Inbound Call Center</Typography>
                </Paper>
            </Grid>
            <Grid item sm={6}>
                <Paper elevation={6} sx={{minHeight: '170px', 
                // backgroundColor: 'secondary.main', 
                backgroundImage: `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                borderRadius: '30px', 
                // padding: '0px', 
                display: 'flex', 
                justifyContent: 'center', 
                paddingX: '10px',
                alignItems: 'center'}}>
                <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'contrast.main', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={MultiChannelIcon} style={{maxHeight: '50px', marginRight: '12px'}}/>Multi-Channel Support</Typography>
                </Paper>
            </Grid>
        </Grid>
    </Container>
  )
}
