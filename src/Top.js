import './about.css';
import React from 'react';
import Top_left from './Top_left.js';
import Box from './Box.js';
import img1 from './img/right1.png';
import img2 from './img/right2.png';

function top () {
    return(
        <div className='top'>
            <Top_left />
            <Box imag = {img1}/>
            <Box imag = {img2}/>
        </div>
    );
}

export default top;