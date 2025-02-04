import './about.css';
import Box from './Box.js';


let Boxs = [];
for(let i =0 ; i < 6; i++)
{
    Boxs.push(<Box hard1={i+1} para = 'text'/>);
}

function box_left() {
    return(
        <div className='box_left'>
            {Boxs}
        </div>
    );
}

export default box_left;