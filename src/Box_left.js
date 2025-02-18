import './about.css';
import Box from "react-module2/dist/Box";


let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

let Boxs = [];
for(let i =0 ; i < 6; i++)
{
    Boxs.push(<Box hard1={i+1} para = {lorem}/>);
}

function box_left() {
    return(
        <div className='box_left'>
            {Boxs}
        </div>
    );
}

export default box_left;