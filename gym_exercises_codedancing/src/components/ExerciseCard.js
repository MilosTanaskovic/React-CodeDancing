import React from 'react';

import { Button, Stack, Typography } from '@mui/material';
import {Link} from 'react-router-dom';

const ExerciseCard = ({exercise}) => {
    return (
        <Link
            to={`/exercise/${exercise.id}`}
            className="exercise-card"
        >
            <img src={exercise.gifUrl} alt={exercise.bodyPart} loading="lazy" />
            <Stack direction="row">
                <Button
                    sx={{
                        ml: '21px', 
                        color: 'white', 
                        background: '#ffa9a9', 
                        fontSize: '14px', 
                        borderRadius: '20px', 
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: '21px', 
                        color: 'white', 
                        background: '#fcc757', 
                        fontSize: '14px', 
                        borderRadius: '20px', 
                        textTransform: 'capitalize'
                    }}
                >
                    {exercise.target}
                </Button>
            </Stack>
            <Typography
                ml="21px"
                color="black"
                fontWeight="bold"
                mt="11px"
                pb="10px"
                textTransform="capitalize"
                fontSize="22px"
            >
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard
