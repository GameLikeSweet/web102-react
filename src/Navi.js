import './main.css';
import Nli from './Nli.js';
import Logo from './Logo.js'

let naviLink = [];
let naviText = ['How it Work', 'Gifts', 'About', 'err', 'Login', 'Members', 'Contracts'];

for(let i = 0 ; i< 7; i++)
{
    console.log (naviText[i])
    if(i == 3)
    {
        naviLink.push(<Logo />)
    }
    else
    {
        naviLink.push(<Nli text = {naviText[i]} />)
    }
        
}

function navi () {
    return (
        <ul className='navi'>
            {naviLink}
        </ul>
    );
}

export default navi;