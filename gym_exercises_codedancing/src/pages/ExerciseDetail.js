import React, {useState, useEffect} from 'react';

import {useParams} from 'react-router-dom';
import { Box } from '@mui/material';

import {fetchData, exercisesOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    
    const {id} = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = '';
            const exercisesData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions)
            setExerciseDetail(exercisesData);
        }
        fetchExercisesData();
    }, [id]);
    console.log(exerciseDetail)
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos />
            <SimilarExercises /> 
        </Box>
    )
}

export default ExerciseDetail
