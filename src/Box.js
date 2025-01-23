import './about.css';

function box ( {num} ) {
    return(
        <div className='box'>
            <h2>{num}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    );
}

export default box;