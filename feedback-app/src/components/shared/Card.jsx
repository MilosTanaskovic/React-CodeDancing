import React from 'react';
import PropTypes from 'prop-types';

export default function Card({children, reverse}) {
    return (
        // className - Contitional Styling
        // <div className={`card ${reverse && 'reverse'}`}>
        //     {children}
        // </div>

        // style - Contitional Styling
        <div 
            className='card'
            style={{
                backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : 'white',
                color: reverse ? 'white' : 'black'
            }}
        >
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
