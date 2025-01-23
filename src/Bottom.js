import './main.css';
import img1 from './img/chef.png';

function bot () {
    return (
        <div className='chefs'>
            <div>
                <p><h1>Title</h1><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <img src = {img1}/>
            </div>
        </div>
    );
}

export default bot;