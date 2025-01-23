import './about.css';
import Box_left from './Box_left';
import Box_right from './Box_right';

function box_all () {
    return(
        <div className='box_all'>
            <Box_left />
            <Box_right />
        </div>
    );
}

export default box_all;