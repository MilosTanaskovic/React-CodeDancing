import React from 'react'
import { Box } from '@mui/material'
import {ScrollMenu} from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart'
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';
  
const HorizontalScrollbar = ({data,extraBodyParts, bodyPart, setBodyPart}) => {
    const {names, icons} = extraBodyParts;
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {names.map((item) => {
            return (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    <BodyPart 
                        item={item}
                        extraBodyParts={extraBodyParts}
                        bodyPart={bodyPart}
                        setBodyPart={setBodyPart}
                    />
                </Box>
            )})}
                
        </ScrollMenu>
    )
}

export default HorizontalScrollbar
