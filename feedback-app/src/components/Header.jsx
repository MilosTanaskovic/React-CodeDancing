import React from 'react';
import PropTypes from 'prop-types';

export default function Header({text, bgColor, textColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <header style={headerStyles}>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'black',
    textColor: '#FF008A',
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}