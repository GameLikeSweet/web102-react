import Header from './Header.js';
import Main from './Main.js';
import Bottom from './Bottom.js';
import './main.css';

function home () {
    return(
        <div className='body'>
            <Header />
            <Main />
            <Bottom />
        </div>
    );
}

export default home;