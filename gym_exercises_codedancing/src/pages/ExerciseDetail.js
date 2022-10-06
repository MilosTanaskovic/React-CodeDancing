import React, {useState, useEffect} from 'react';

import {useParams} from 'react-router-dom';
import { Box } from '@mui/material';

import {fetchData, exercisesOptions, youtubeOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    
    const {id} = useParams();
    console.log(exerciseVideos)
    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exercisesDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions)
            setExerciseDetail(exercisesDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exercisesDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exercisesDetailData.target}`, exercisesOptions)
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exercisesDetailData.equipment}`, exercisesOptions)
            setEquipmentExercises(equipmentExercisesData);
        }
        fetchExercisesData();
    }, [id]);
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} /> 
        </Box>
    )
}

export default ExerciseDetail
