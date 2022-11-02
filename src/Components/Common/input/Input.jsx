import {React,useState} from 'react';
import './Input.css';
import {useNavigate} from 'react-router-dom';
import {Button, Stack,TextField} from '@mui/material';
import {makeStyles} from '@mui/styles'
import axios from 'axios';
import InfoIcon from '@mui/icons-material/Info';
import TextInputLogo from '../../pictures/undraw_text_field_htlv.svg';
import Footer from '../../pictures/Footer.svg'


function Input(){
    const [data,setData]=useState(false);
    const [dataError, setDataError]=useState(false);
    const [output,setOutput]=useState();
    const [print, setPrint]=useState(false);
    const [loading,setLoading]= useState(false);
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        setDataError(false);

        if(data==''){
            setDataError(true);
        }
        if(data){
            setLoading(true);

            setTimeout(()=>{
                setLoading(false);
                setPrint(true)
            },2000);
        }
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
            <section className='input-image-view'>
                <section className='form-view'>
                    <section className='info-view'>
                        <section style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                            <InfoIcon style={{alignSelf:'center'}}/>
                            <a style={{alignSelf:'center',marginLeft:'10px'}} className="input-info-text">Text length: 50 - 500 words. Supports English</a>
                        </section>
                        
                    </section> 
                    <section className='input-caption-view'>
                        <a className='input-info-caption'>File uploads will be added soon, hang in there!</a>
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
                            disabled:{loading},
                            marginTop:'10px'}}><a style={{color:'white'}}>
                                {loading && (
                                    <i
                                    l className="fa fa-refresh fa-spin"
                                    style={{ marginRight: "5px" }}/>
                                )}
                                Submit</a></Button>
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
            {print?<section className='output-view'>
                <section style={{display:'flex',flexDirection:'column'}}>
                    <a className="output-heading">Generated Questions</a>
                    <a className="output-text">1.  _______  play an important role in equipment control in a variety of fields, such as operating air conditioners at a comfortable room temperature, improving automobile safety, laser treatment in cutting-edge medical care and many more.</a>
                    <a className='output-text' style={{marginTop:'15px'}}> a.  Semiconductor</a>
                    <a className='output-text'>b.  Metal</a>
                    <a className='output-text'>c.  Copper</a>
                    <a className='output-text'>d.  Silver</a>
                    <a className='output-text' style={{marginTop:'10px'}}>More options:  [ ] </a>

                    <a className='output-text' style={{marginTop:'20px'}}>2. A  _______  that conducts electricity is called a conductor, and a  _______  that does not conduct electricity is called an insulator.</a>
                    <a className='output-text' style={{marginTop:'15px'}}> a.  Semiconductor</a>
                    <a className='output-text'>b.  Metal</a>
                    <a className='output-text'>c.  Copper</a>
                    <a className='output-text'>d.  Silver</a>
                    <a className='output-text' style={{marginTop:'10px'}}>More options:  ['Fluid', 'Glop', 'Residue', 'Sediment', 'Sludge', 'Solid', 'Solute', 'System', 'Vegetable Matter', 'Ylem'] </a>

                    <a className='output-text' style={{marginTop:'20px'}}>3. A substance that conducts  _______  is called a conductor, and a substance that does not conduct  _______  is called an insulator.</a>
                    <a className='output-text' style={{marginTop:'15px'}}> a.  Electricity</a>
                    <a className='output-text'>b.  Sensation</a>
                    <a className='output-text' style={{marginTop:'10px'}}>More options:  [ ]  </a>

                    <a className='output-text' style={{marginTop:'20px'}}>4. ICs(integrated circuits) and electronic discrete  _______  such as diodes and transistors are made of semiconductors.</a>
                    <a className='output-text' style={{marginTop:'15px'}}> a.  Components</a>
                    <a className='output-text'>b.  Copper</a>
                    <a className='output-text'>c.  Affinity</a>
                    <a className='output-text'>d.  Association</a>
                    <a className='output-text' style={{marginTop:'10px'}}>More options:  ['Causality', 'Change', 'Comparison', 'Connection', 'Control', 'Foundation', 'Function', 'Interrelation', 'Kinship', 'Linguistic Relation', 'Logical Relation', 'Magnitude Relation', 'Mathematical Relation', 'Opposition', 'Ownership', 'Part']  </a>
                   
                    <a className='output-text' style={{marginTop:'20px'}}>5. ICs(integrated circuits) and electronic discrete components such as diodes and  _______  are made of semiconductors.</a>
                    <a className='output-text' style={{marginTop:'15px'}}> a.  N-type Semiconductor</a>
                    <a className='output-text'>c.  Transistors</a>
                    <a className='output-text'>d.  Diode</a>
                    <a className='output-text'>b.  Chip</a>
                    <a className='output-text' style={{marginTop:'10px',marginBottom:'10px'}}>More options:  ['P-type Semiconductor', 'Thermistor', 'Transistor']  </a>
                    

                </section>

               
            </section> :null}
            <img src={Footer} className="input-footer-view"/>
        </section>
);
}

export default Input;