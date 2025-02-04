import './about.css';

function box (input) {
    
    let article = [];

    if(input.hard1 !== undefined)
    {
        article.push(<Hard1  text = {input.hard1}/>);
    }

    if(input.para !== undefined)
    {
        article.push(<Para  text = {input.para}/>);
    }

    if(input.imag !== undefined)
    {
        article.push(<Imag  source = {input.imag} />);
    }


    return(
        <div className='box'>
            {article}
        </div>
    );
}

export default box;

function Para ({text}) {
    return(
        <p>
            {text}
        </p>
    );
}

function Imag ({source}) {
    return(
        <img src={source}/>
    )
}

function Hard1 ({text})
{
    return(
        <h1>{text}</h1>
    )
}