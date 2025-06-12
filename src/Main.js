import './main.css';
import './img/main.png';
import Icon_title from './Icon_title';
import Icon_box from 'react-module1';

function Main() {

    console.log(Icon_box);
    return (
        <>
            <div className='main_picture'></div>
            <Icon_title />
            <Icon_box />
        </>
    );
}

export default Main;
