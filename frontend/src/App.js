import React from 'react';
import './App.css';

import theme from './global/ThemeConfig';

import Navbar  from './components/Navbar';
import MainContent from './components/MainContent';
import { ThemeProvider } from '@mui/material';
import { Offers } from './components/Offers';
import Footer from './components/Footer';
import IndustryExperience from './components/IndustryExperience';
import { WhyChooseUs } from './components/WhyChooseUs';
import Success from './components/Success';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{margin: '0px'}}>
        <Navbar />
        <MainContent />
        <Offers />
        <IndustryExperience />
        <WhyChooseUs />
        <Success />
        <Testimonial />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

