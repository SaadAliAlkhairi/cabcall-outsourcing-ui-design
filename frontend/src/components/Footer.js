import React, { useState, useEffect } from 'react'

import { Box, Typography } from '@mui/material';

const Footer = () => {
  const [current_year, set_current_year] = useState("Current Year")

  useEffect(() => {
    set_current_year(new Date().getFullYear())
  }, [])


  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#eaebff', borderRadius: '20px', maxWidth: '95%', marginX: 'auto', paddingY: '20px'/*, border: '1px solid'*/}}>
      <Typography variant="subtitle1" align="center" sx={{fontWeight: 'bold'}}>
        Copyright ©{current_year} | Cab Call
      </Typography>
    </Box>
  )
}


export default Footer;