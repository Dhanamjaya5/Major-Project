import React from 'react';
import {Header,Home,Input} from './Components/Common';
import {BrowserRouter,Routes,Route,Router} from 'react-router-dom';
import { makeStyles} from '@mui/material'
import './App.css';

 

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/input' element={<Input/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
