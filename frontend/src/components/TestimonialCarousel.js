import React, { useState } from 'react';
import { Box, Card, CardContent, Avatar, Typography, Button, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '@emotion/react';

const TestimonialCarousel = () => {
    const theme = useTheme();

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const [testimonials, setTestimonials] = useState([
        {
            name: 'ABC',
            location: 'US',
            comment: "I can't believe how cost-effective CabCall's services are. They've helped us improve our customer service while saving us a fortune on call center expenses."
        },

        {
            name: 'DEF',
            location: 'US',
            comment: "Working with CabCall has been a breeze. Their dedicated team ensures that our calls are answered professionally, and they've become an essential part of our operations."
        },

        {
            name: 'GHI',
            location: 'US',
            comment: "CabCall's service is a lifesaver! Knowing that our calls are handled professionally, day or night, gives us peace of mind and helps us maintain a great reputation."
        }
    ])

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: {
                xs: '95%',
                sm: '50%',
                md: '50%',
                lg: '40%',
                xl: '40%'
            }
        }}>
            <Card sx={{
                textAlign: 'center', borderRadius: 4,
                backgroundImage: `radial-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                margin: 'auto', mt: '40px', py: '10px', px: '5px'/*, backgroundColor: 'primary.main',*/
            }}>
                <CardContent>
                    <Typography variant="subtitle2" sx={{ mb: 2, color: 'white' }}>
                        {testimonials[currentIndex].comment}
                    </Typography>
                    <Typography variant="h6" sx={{ color: 'contrast.main', fontWeight: 'bold' }}>{testimonials[currentIndex].name}</Typography>
                    <Typography variant="subtitle2" sx={{ color: 'contrast.main' }}>
                        {testimonials[currentIndex].location}
                    </Typography>
                </CardContent>
            </Card>
            <Box sx={{ mt: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconButton onClick={handlePrevClick} sx={{marginRight: '10px'}}>
                    <NavigateBeforeIcon sx={{color: 'contrast.main', backgroundColor:"secondary.main", borderRadius: '100%', padding: '5px'}} />
                </IconButton>
                {/* <Typography variant="caption" color="textSecondary" sx={{ mx: 2, color:"white" }}>
                    {currentIndex + 1}/{testimonials.length}
                </Typography> */}
                <IconButton onClick={handleNextClick} sx={{marginLeft: '10px'}}>
                    <NavigateNextIcon sx={{color: 'contrast.main', backgroundColor:"secondary.main", borderRadius: '100%', padding: '5px'}} /> 
                </IconButton>
            </Box>
        </Box>
    );
};

export default TestimonialCarousel;
