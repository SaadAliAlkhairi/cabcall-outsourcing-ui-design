import React from 'react'

import { Typography, Box, Container, Grid, Paper } from '@mui/material';

const IndustryExperience = () => {
  return (
    <Container sx={{backgroundColor: '#ededed', 
    minWidth: '100%', paddingY: '150px', marginTop: '100px'}}>
        <Box sx={{marginBottom: '100px'}}>
            <Typography variant='h3' sx={{fontWeight: 'bold', marginBottom: '30px'}}>
                Industry Experience
            </Typography>
            <Typography variant='body1' sx={{maxWidth: '65%', marginX: 'auto'}}>
            Our CabCall service offers 24/7 customer support by highly trained agents. With years of industry experience, we're known for reliable and affordable CabCall services, earning trust in excellent customer care.
            </Typography>
        </Box>
        <Grid container spacing={2} sx={{maxWidth: '80%', marginX: 'auto'}}>
            <Grid item xs={12} sm={4}>
                <Typography variant='h2' sx={{ fontWeight: 'bold', color: 'primary.main'}}>130+</Typography>
                <Typography variant='h6'>Agents</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant='h2' sx={{ fontWeight: 'bold', color: 'primary.main'}}>25+</Typography>
                <Typography variant='h6'>Clients</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant='h2' sx={{ fontWeight: 'bold', color: 'primary.main'}}>8</Typography>
                <Typography variant='h6'>Years</Typography>
            </Grid>
        </Grid>
    </Container>
  )
}

export default IndustryExperience;