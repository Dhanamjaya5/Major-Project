import {React,useState} from 'react';
import './Input.css';
import {useNavigate} from 'react-router-dom';
import {Button, Stack,TextField} from '@mui/material';
import {makeStyles} from '@mui/styles'
import axios from 'axios';


function Input(){
    const [data,setData]=useState(false);
    const [dataError, setDataError]=useState(false);
    const [output,setOutput]=useState();

    const handleSubmit= (e)=>{
        e.preventDefault();
        setDataError(false);

        if(data==''){
            setDataError(true);
        }
        if(data)
        console.log(data)
    }
    const navigate=useNavigate();
    return(
        <section>
            <section className='header'>
                <section className='title'>
                    <a className='title-text' onClick={()=>navigate('/')}>EASYMCQ</a>
                </section>

                <section className='options'>
                    <a className='options-text-home' onClick={()=>navigate('/')}>Home</a>
                    <a className='options-text'>Blog</a>
                </section>
            </section>
            <section>
                <section className='form-view'> 
                    <form noValidate autoComplete='off' onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>   
                        <TextField 
                            onChange={(e)=>setData(e.target.value)}
                            label='Data' 
                            variant='outlined'                           
                            multiline
                            rows={11}
                            required
                            style={{width:'600px', background:'#F2F2F7'}}
                            error={dataError}/>
                        <div style={{marginTop:'20px'}}>    
                        <Button className='submit-button-view'type='submit'><a>Submit</a></Button>
                        </div>
                    </form>
                    
                </section>
                <section className='image'></section>
            </section>
            <section className='output-view'>

            </section>
        </section>
);
}

export default Input;