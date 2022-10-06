import React from 'react';

import { Box, Button, Typography } from '@mui/material';

//import HeroBannerImage from '../assets/images/banner.png';
import HeroBannerImage from '../assets/images/gym_banner_2 1.png';
//import HeroBannerImage from '../assets/images/gym_banner_3 1.png';

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: {lg: '212px', xs: '70px'}, 
                ml: {sm: '50px'}
            }}
            position="relative"
            p="20px"
        >
            <Typography
                color="#FF2625"
                fontWeight="600"
                fontSize="26px"
            >
                Fitness Club
            </Typography>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: {lg: '44px', xs: '40px'}
                }}
                mb="26px"
                mt="28px"
            >
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography
                fontSize="22px"
                lineHeight="35px"
                mb={10}
            >
                Check out the most effective exercises
            </Typography>
            <Button 
                variant="contained" 
                color="error"
                href="#exercises"
                sx={{
                    backgroundColor: '#FF2625',
                    padding: '10px'
                }}
            >
                Expolore Exercises
            </Button>
            <Typography 
                fontWeight={600}
                color="#FF2625"
                sx={{
                    opacity: 0.1,
                    display: {lg: 'block', xs: 'none'}
                }}
                fontSize="200px"
            >
                Exercises
            </Typography>
            <img 
                src={HeroBannerImage}
                alt="banner"
                className="hero-banner-img"
            />
        </Box>
    )
}

export default HeroBanner
