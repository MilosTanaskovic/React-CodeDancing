import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {Box} from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

import './App.css';

function App() {
  return (
    <Box 
      component="div"
      sx={{width: { xl: '1488px'}}}
      width="400px"
      m="auto"
    >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id' element={<ExerciseDetail/>} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
