import {React} from 'react';
import styled from 'styled-components';
import './Header.css';



function Header() {
    
    return(
        <section className='header-main'>
             <section className='title'>
                <a className='title-style'>Easy MCQ</a>
             </section>

             <section className='options'>

                <section className='blog'>
                    <a className='blog-text'>Blog</a>
                </section>

                <section className='team' onClick={test}>
                    <a className='team-text'>Team</a>
                </section>

                <section className='login'>
                    <button onClick={test} className='login-style'>Login</button>
                </section>

             </section>

        </section>

    );
}

function test(){
    console.log('Hi');
}

export default Header;