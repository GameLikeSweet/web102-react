import './main.css'
import React from 'react';
import { Link } from 'react-router-dom';

function li ({text}) {

    if(text === 'About')
    {
        return(
                <li>
                <Link className='link' to ="./about">{text}</Link>
                </li>
        );
    }
    else
    {
        return(
            <li>
                {text}
            </li>
        );
    }
}

export default li;