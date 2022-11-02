import {React,useState} from 'react';
import './Input.css';
import {useNavigate} from 'react-router-dom';
import {Button, Stack,TextField} from '@mui/material';
import {makeStyles} from '@mui/styles'
import axios from 'axios';
import InfoIcon from '@mui/icons-material/Info';
import TextInputLogo from '../../pictures/undraw_text_field_htlv.svg';

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
                    <a className='title-text'>EASYMCQ</a>
                </section>

                <section className='options'>
                    <a className='options-text-home' onClick={()=>navigate('/')}>Home</a>
                    <a className='options-text'>Blog</a>
                </section>
            </section>
            <section className='input-image-view'>
                <section className='form-view'>
                    <section className='info-view'>
                        <section style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                            <InfoIcon style={{alignSelf:'center'}}/>
                            <a style={{alignSelf:'center',marginLeft:'10px'}}>Text length: 50 - 500 words. Supports English</a>
                        </section>
                        
                    </section> 
                    <section className='input-caption-view'>
                        <a>File uploads will be added soon, hang in there!</a>
                    </section>
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
                        <Button type="submit" style=
                            {{backgroundColor:'#3A4C8E',
                            color:'white',
                            width:'600px',
                            borderRadius:'15px',
                            marginTop:'10px'}}><a>Submit</a></Button>
                        </div>
                    </form>
                    
                </section>
                <section className='image'>
                <img src={TextInputLogo} 
                    alt="Input Logo" 
                    width="600" 
                    height="430"
                    />
                </section>
            </section>
            <section className='output-view'>

            </section>
        </section>
);
}

export default Input;