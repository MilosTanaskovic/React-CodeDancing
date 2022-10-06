import React from 'react'
import { Box } from '@mui/material'
import {ScrollMenu} from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart'
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';
import ExerciseCard from './ExerciseCard';
  
const HorizontalScrollbar = ({data, extraBodyParts, bodyPart, setBodyPart, isBodyParts}) => {

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => {
            return (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    {isBodyParts ? (
                        <BodyPart 
                            item={item}
                            bodyPart={bodyPart}
                            setBodyPart={setBodyPart}
                        />
                    ):(
                        <ExerciseCard exercise={item} />
                    )}
                </Box>
            )})}
                
        </ScrollMenu>
    )
}

export default HorizontalScrollbar
