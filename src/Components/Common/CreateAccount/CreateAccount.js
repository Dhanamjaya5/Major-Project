import React from 'react';
import { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import Navbar from './Navbar';
import './CreateAccount.css';
import { auth } from './firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [USER] = useAuthState(auth);

  const [user, setUser] = useState({});

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    // Notice the empty dependency array, there to make sure the effect is only run once when the component mounts
  }, []);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const redirect = () => {
    if (auth) {
      navigate('/');
    } else {
      navigate('input');
    }
  };

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <Navbar />

      <div className='CreateAccount'>
        <h2>Create Account</h2>
      </div>
      <hr className='HrCA'></hr>

      <div className='center'>
        <div className='CreateForm'>
          <div className='EmailSection'>
            <label className='label'>Email</label>
            <input
              type='email'
              placeholder='Email or Username'
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <label className='label'>Password</label>
          <input
            id='pswrd'
            type='password'
            placeholder='Password'
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <div className='buttonSection'>
            <button
              className='btn-CA'
              onClick={() => {
                register();
                redirect();
              }}
            >
              Create account
            </button>
            <a href='#' className='OrLogin'>
              Or Login In?
            </a>
          </div>
          <h4> User Logged In: </h4>
          {user?.email}

          <button onClick={logout}> Sign Out </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
