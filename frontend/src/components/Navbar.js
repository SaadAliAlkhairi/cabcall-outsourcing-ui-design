import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: '100%'}}>
    <AppBar  /*right="100px"*/ sx={{ position: 'fixed', top: '20px', right: 'auto', left: 'auto', margin: '0 auto', width: '85%',/*padding: '20px'*//*, marginX: '70px'*//*,marginRight: '70px',*/ maxWidth: '1350px',borderRadius: '100px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingY: '5px', backgroundColor: 'contrast.main', borderRadius: '100px' }}>
        <Typography
          variant="h6"
          sx={{
            // fontStyle: 'italic',
            backgroundColor: 'black',
            borderRadius: '100px',
            paddingY: '3px',
            px: 1,
            fontWeight: 'bold'
          }}
        >
          CabCall
        </Typography>
        {isMobileScreen ? (
          // Display the hamburger menu icon on mobile screens
          <IconButton color="inherit" onClick={toggleMobileMenu}>
            <MenuIcon sx={{color: 'black'}}/>
          </IconButton>
        ) : (
          // Display individual menu items on other screens
          <Box>
            <Button sx={{fontWeight: 'bold', color: 'black'}}>Home</Button>
            <Button sx={{fontWeight: 'bold', color: 'black'}}>Services</Button>
            <Button sx={{fontWeight: 'bold', color: 'black'}}>About</Button>
            <Button sx={{fontWeight: 'bold', color: 'black'}}>Contact</Button>
          </Box>
        )}
      </Toolbar>
      {/* Mobile menu (Drawer) */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }} // Display on mobile screens only
      >
        <List>
          <ListItem button onClick={toggleMobileMenu}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleMobileMenu}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={toggleMobileMenu}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleMobileMenu}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
    </Box>
  );
};

export default Navbar;




// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   CssBaseline,
//   Container,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <>
//       <CssBaseline /> {/* Add this to reset default styles */}
//       <div style={{ position: 'relative', top: 0, left: 0, right: 0, zIndex: 100 }}>
//         <AppBar sx={{ borderRadius: '100px', backgroundColor: 'contrast.main', marginLeft: '20px', marginTop: '50px', maxWidth: '1000px' }}>
//           <Container maxWidth="lg">
//             <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <Typography variant="h6" sx={{ fontStyle: 'italic', borderRadius: '5px', px: 1, bgcolor: 'primary.main' }}>
//                 LOGO
//               </Typography>
//               {isMobileScreen ? (
//                 <IconButton color="inherit" onClick={toggleMobileMenu}>
//                   <MenuIcon />
//                 </IconButton>
//               ) : (
//                 <Box>
//                   <Button sx={{ fontWeight: 'bold' }}>Home</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>Services</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>About</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>Contact</Button>
//                 </Box>
//               )}
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </div>
//       {/* Mobile menu (Drawer) */}
//       <Drawer
//         anchor="right"
//         open={mobileMenuOpen}
//         onClose={toggleMobileMenu}
//         sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }} // Display on mobile screens only
//       >
//         <List>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Services" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="About" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Contact" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;







// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   CssBaseline,
//   Container,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <>
//       <CssBaseline /> {/* Add this to reset default styles */}
//       <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
//         <AppBar sx={{ borderRadius: '100px', width: '70%', margin: '0 auto' }}>
//           <Container maxWidth="lg">
//             <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <Typography variant="h6" sx={{ fontStyle: 'italic', borderRadius: '5px', px: 1 }}>
//                 LOGO
//               </Typography>
//               {isMobileScreen ? (
//                 <IconButton color="inherit" onClick={toggleMobileMenu}>
//                   <MenuIcon />
//                 </IconButton>
//               ) : (
//                 <Box>
//                   <Button sx={{ fontWeight: 'bold' }}>Home</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>Services</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>About</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>Contact</Button>
//                 </Box>
//               )}
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </div>
//       {/* Mobile menu (Drawer) */}
//       <Drawer
//         anchor="right"
//         open={mobileMenuOpen}
//         onClose={toggleMobileMenu}
//         sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }} // Display on mobile screens only
//       >
//         <List>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Services" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="About" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Contact" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;





// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   CssBaseline,
//   Container,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <>
//       <CssBaseline /> {/* Add this to reset default styles */}
//       <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
//         <AppBar
//           sx={{
//             borderRadius: '100px',
//             width: '70%', // Set the width to 70%
//             margin: '0 auto', // Center the AppBar horizontally
//             maxWidth: 'none', // Remove maxWidth to ensure it takes 70% of the screen
//           }}
//         >
//           <Container maxWidth="lg">
//             <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <Typography variant="h6" sx={{ fontStyle: 'italic', borderRadius: '5px', px: 1 }}>
//                 LOGO
//               </Typography>
//               {isMobileScreen ? (
//                 <IconButton color="inherit" onClick={toggleMobileMenu}>
//                   <MenuIcon />
//                 </IconButton>
//               ) : (
//                 <Box>
//                   <Button sx={{ fontWeight: 'bold' }}>Home</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>Services</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>About</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>Contact</Button>
//                 </Box>
//               )}
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </div>
//       {/* Mobile menu (Drawer) */}
//       <Drawer
//         anchor="right"
//         open={mobileMenuOpen}
//         onClose={toggleMobileMenu}
//         sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }} // Display on mobile screens only
//       >
//         <List>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Services" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="About" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Contact" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;





// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   CssBaseline,
//   Container,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <>
//       <CssBaseline /> {/* Add this to reset default styles */}
//       <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
//         <AppBar
//           sx={{
//             borderRadius: '100px',
//             width: '70%', // Set the width to 70%
//             margin: '0 auto', // Center the AppBar horizontally using auto margins
//             display: 'flex', // Use flex to center vertically
//             justifyContent: 'space-between', // Space between logo and menu items
//             alignItems: 'center', // Vertically center content
//           }}
//         >
//           <Container maxWidth="lg">
//             <Toolbar>
//               <Typography variant="h6" sx={{ fontStyle: 'italic', borderRadius: '5px', px: 1 }}>
//                 LOGO
//               </Typography>
//               {isMobileScreen ? (
//                 <IconButton color="inherit" onClick={toggleMobileMenu}>
//                   <MenuIcon />
//                 </IconButton>
//               ) : (
//                 <Box>
//                   <Button sx={{ fontWeight: 'bold' }}>Home</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>Services</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>About</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>Contact</Button>
//                 </Box>
//               )}
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </div>
//       {/* Mobile menu (Drawer) */}
//       <Drawer
//         anchor="right"
//         open={mobileMenuOpen}
//         onClose={toggleMobileMenu}
//         sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }} // Display on mobile screens only
//       >
//         <List>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Services" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="About" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Contact" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;







// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
//   CssBaseline,
//   Container
// } from '@mui/material';
// import {makeStyles} from '@mui/styles';
// import MenuIcon from '@mui/icons-material/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '64px', // Adjust for the AppBar height
//   },
//   appBar: {
//     borderRadius: '100px',
//     width: '70%', // Set the width to 70%
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     fontStyle: 'italic',
//     backgroundColor: theme.palette.secondary.main,
//     borderRadius: '5px',
//     paddingX: '8px',
//   },
// }));

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
//   const classes = useStyles();

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <>
//       <CssBaseline />
//       <div className={classes.root}>
//         <AppBar position="static" className={classes.appBar} sx={{width: '70%'}}>
//           <Container maxWidth="lg">
//             <Toolbar>
//               <Typography variant="h6" className={classes.logo}>
//                 LOGO
//               </Typography>
//               {isMobileScreen ? (
//                 <IconButton color="inherit" onClick={toggleMobileMenu}>
//                   <MenuIcon />
//                 </IconButton>
//               ) : (
//                 <Box>
//                   <Button sx={{ fontWeight: 'bold' }}>Home</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>Services</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>About</Button>
//                   <Button sx={{ fontWeight: 'bold' }}>Contact</Button>
//                 </Box>
//               )}
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </div>
//       {/* Mobile menu (Drawer) */}
//       <Drawer
//         anchor="right"
//         open={mobileMenuOpen}
//         onClose={toggleMobileMenu}
//         sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
//       >
//         <List>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Services" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="About" />
//           </ListItem>
//           <ListItem button onClick={toggleMobileMenu}>
//             <ListItemText primary="Contact" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;
