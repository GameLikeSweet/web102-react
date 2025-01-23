import './about.css';
import Footer_text from './Footer_text';

let texts = ['법적고지', '이메일무단수집거부', '이용약관', '개인정보취급방침', '고객센터', '입찰공고'];

let list = [];

for(let i = 0 ; i < 11; i++)
{
    if(i%2 == 0)
    {
        list.push(<Footer_text text= {texts[i/2]} />);
    }
    else list.push(<Footer_text text= {'|'} />);
}

function footer () {
    return(
        <div className='footer'>
            <ul>{list}</ul>
        </div>
    );
}

export default footer;