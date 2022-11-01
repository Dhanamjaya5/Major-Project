import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './SignIn.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from './firebase-config';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    // Notice the empty dependency array, there to make sure the effect is only run once when the component mounts
  }, []);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
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
    <>
      <Navbar />
      <hero className='SignIn'>
        <h2>Sign In</h2>
      </hero>
      <hr className='SignInHr'></hr>

      <div className='centerSignIn'>
        <div className='SignInForm'>
          <div className='EmailSection'>
            <label className='label'>Email</label>
            <input
              type='SignInEmail'
              placeholder='Email'
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </div>
          <label className='label'>Password</label>
          <input
            id='pswrd'
            type='SignInpassword'
            placeholder='Password'
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          <div className='buttonSection'>
            <button
              className='btn-CA'
              onClick={() => {
                login();
                redirect();
              }}
            >
              Sign In
            </button>
            <a href='#' className='OrCreateAccount'>
              Or Create Account?
            </a>
          </div>
          <div className='GoogleLoginButton'>
            <hr />
            <h4>Or</h4>
            <button className='custom-btn btn-4'>
              <span>Login In with google</span>
            </button>
          </div>
          <h4> User Logged In: </h4>
          {user?.email}

          <button onClick={logout}> Sign Out </button>
        </div>
      </div>
    </>
  );
}

export default SignIn;
