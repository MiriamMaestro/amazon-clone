import React, { useState } from 'react';
import { Link, useHistory} from "react-router-dom";
import './Login.css';
import {auth} from '../firebase';


function Login() {
    const history= useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    
    const signIn = e =>{
        //prevent refresh
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" className="login-logo"/>
            </Link>
            <div className="login-container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password}
                     onChange={e => setPassword(e.target.value)}/>
                    <button className="login-signInButton"
                    onClick={signIn}
                    type="submit">Sign In</button>
                    
                </form>
                <p>
                    By signing-in you agree to AMAZONI's Copy Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login-registerButton'
                onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
