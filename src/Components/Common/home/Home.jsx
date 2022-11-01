import React from 'react';
import './Home.css'
import Header  from '../header';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';

function Home(){
    const navigate= useNavigate();
    return(
        <section>
        <Header/>
        <section className='get-started-window'>

            <section className='title-view' contentEditable>
                <a className='title-text'>Create Multiple Choice Questions<span className='mcq-word'>(MCQs)</span> online from any text using NLP.</a>
             
            </section>

            <section className='caption-view'>
                <a className='caption-text'>An online tool to generate MCQs automatically using Advanced NLP Techniques</a>
            </section>

            <section className='button-view'>
                <button className='get-started-button' onClick={()=>navigate('input')}>
                    <div className='get-started-view'>
                        <a className='get-started-text'>Get Started Here</a>
                        <ArrowForwardIcon/>
                    </div>
                </button>
            </section>
        </section>
        <section className='Details-view'>
            <section></section>
        </section>
        </section>

    )
}
export default Home;
