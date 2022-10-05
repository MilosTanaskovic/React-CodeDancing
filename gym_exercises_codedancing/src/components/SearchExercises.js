import React, {useState, useEffect} from 'react';

import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exercisesOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

import Icon from '../assets/icons/gym.png';
import Back from '../assets/bodyPart/back.png';
import Cardio from '../assets/bodyPart/cardio.jpeg';

const bodyPartImgs = [Icon, Back, Cardio];

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);

            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);

            const searchedExercises = exercisesData.filter((exercise) =>
                exercise.name.toLowerCase().includes(search) ||
                exercise.target.toLowerCase().includes(search) ||
                exercise.bodyPart.toLowerCase().includes(search) ||
                exercise.equipment.toLowerCase().includes(search)
            );

            setSearch('');
            setExercises(searchedExercises);

            window.scrollTo({top: 1800, left: 100, behavior: 'smooth' })
        }
    }
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>

            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    p: '20px'
                }}
            >
                <HorizontalScrollbar 
                    data={bodyParts}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                />
            </Box>
        </Stack>
    )
}

export default SearchExercises
