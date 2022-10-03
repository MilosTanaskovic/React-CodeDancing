import React, {useState, useEffect} from 'react';

import { Box, Button, Stack, TextField, Typography } from '@mui/material';


const SearchExercises = () => {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            mt="37px"
            p="20px"
        >
            <Typography 
                fontWeight={700}
                mb="50px"
                textAlign="center"
                sx={{
                    fontSize: { lg: '44px', xs: '30px'}
                }}
            >
                Awsome Exercises You <br />
                Should Know
            </Typography>
            <Box
                position="relative"
                mb="72px"
            >
                <TextField 
                    height="76px"
                    value=""
                    onChange={(e) => {}}
                    placeholder="Search Exercises"
                    type="text"
                    sx={{
                       input: {
                           fontWeight: '700',
                           border: 'none',
                           borderRadius: '4px'
                       },
                       width: { lg: '800px', xs: '350px'},
                       backgroundColor: 'white',
                       borderRadius: '40px',
                    }}
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: {lg: '175px', xs: '80px'},
                        fontSize: {lg: '20px', xs: '14px'},
                        height: '56px',
                        position: 'absolute',
                        right: '0',
                    }}
                >
                    Search
                </Button>
            </Box>
        </Stack>
    )
}

export default SearchExercises
