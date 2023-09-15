import React from 'react';
import { Box, Container, Grid, List, ListItem, ListItemIcon, Typography, useTheme } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';

import image1 from '../media/1.png';
import WhatsappLogo from '../media/whatsapp-logo.png';

const MainContent = () => {
  const theme = useTheme();

  return (
    <Box>
      
      <Box
        sx={{
          backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main}, ${theme.palette.contrast.main})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // minHeight: 'calc(100vh - 64px)', // Adjust for the Navbar height
          // height: '110vh',
          paddingY: '350px',
          display: 'flex',
          flexWrap: {
            xs: 'wrap',
            sm: 'wrap',
            md: 'wrap',
            lg: 'nowrap',
            xl: 'nowrap',
          },
          alignItems: 'center',
          // maxWidth: '1366px',
          justifyContent: 'space-between',
          color: 'white', // Text color
          textAlign: 'center',
          paddingTop: '200px'
        }}
      >
        <Container sx={{width: 'fit-content', /*mx: '40px'*/}}>
          <Box sx={{/*marginLeft: '120px',*/ maxWidth: '500px'/*{
            xs: '500px',
            sm: '500px',
            md: '500px',
            lg: '500px',
            xl: '500px'
          }*/, 
          // marginX: 'auto',
          textAlign: {
            xs: 'center',
            lg: 'left'
          }}}>
            <Typography variant="h4" component="h1" sx={{fontSize: '18px', fontWeight: 'bold'}}>
              Welcome to Cab Call
            </Typography>
            <Typography variant="h1" component="h1" sx={{fontSize: '45px', fontWeight: 'bold'}}>
            Your Premier Transport Partner
            </Typography>
            <Typography variant="body1" sx={{fontSize: '17px', letterSpacing: '1px'}}>
            We're your dedicated partner for seamless transport solutions. With a passion for excellence, we provide instant, top-notch customer service that's second to none. 
            Every interaction reflects your brand's vibe, ensuring customer satisfaction and loyalty.
            </Typography>
          </Box>
          {/* <img src={image1} style={{maxWidth: '400px', maxHeight: '400px'}}/> */}
        </Container>
        <Box sx={{marginX: 'auto', maxWidth: '300px',
        marginTop: {
          xs: '100px',
          lg: '0px'
          // sm: '200px'
        }
        }}>
          <img src={image1} style={{ width: '100%'}}/>
        </Box>
      </Box>
      
      <List sx={{position: 'relative', display: 'flex', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center', alignItems: 'center', width: '60%', marginTop: '-200px', marginX: 'auto'}}>
        <ListItem sx={{backgroundColor: 'grey', color: 'contrast.main', backgroundColor: 'secondary.main', borderRadius: '100px', width: 'fit-content', marginRight: '20px', marginTop: {xs: '10px', lg: '0px'}}}><CheckCircleTwoToneIcon />Experienced Agents</ListItem>
        <ListItem sx={{backgroundColor: 'grey', color: 'contrast.main', backgroundColor: 'secondary.main', borderRadius: '100px', width: 'fit-content', marginRight: '20px', marginTop: {xs: '10px', lg: '0px'}}}><CheckCircleTwoToneIcon />Seamless Integration</ListItem>
        <ListItem sx={{backgroundColor: 'grey', color: 'contrast.main', backgroundColor: 'secondary.main', borderRadius: '100px', width: 'fit-content', marginRight: '20px', marginTop: {xs: '10px', lg: '0px'}}}><CheckCircleTwoToneIcon />Immediate Response</ListItem>
      </List>
      <Box sx={{position: 'fixed', bottom: '20px', left: '20px'}}>
        <a href='https://wa.me/923417133323' target='_blank'>
          <img src={WhatsappLogo} style={{maxWidth: '60px'}}/>
        </a>
      </Box>
    </Box>
  );
};

export default MainContent;
