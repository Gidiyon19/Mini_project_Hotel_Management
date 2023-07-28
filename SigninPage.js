import React, { useState,useEffect } from 'react';
import './Signin.css';
// import { login } from "./UserSlice";
import axios from 'axios'

import { login } from './userSlice';
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';

const SigninPage = () => {


  const[user,setUser]=useState({});
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
  
  // const [email, setEmail] = useState('')

  const handleSubmit= async (e)=>{
    e.preventDefault();
    dispatch(
      login(
          {
              name:username
          }
      )
  )
    
  try{
    const response=await axios.post('http://localhost:8081/api/v1/auth/authenticate',{
        "name":username,
        "password":password
    });
    navigate('/Main');
    let token=response.data.token;
    let user=response.data.id;
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
}
catch(error){
    window.alert("Incorrect Username or Password !!!");
}
}
    
  return (
      <div className='logo11'>
            
      
    <div className="login-page11">
      
    <div className="login1-page11">
      <div className="login-container11">
        <h2>Sign In</h2>
        <br></br>
        <p className='ab11'>...................................................................</p>
        <pre><Link to="/"><button className="btn-11">User</button></Link><Link to="/User"><button className="btn-2">Admin</button></Link></pre>
        <br/>
        <form onSubmit={handleSubmit}>
            <h4 className='a11'>Username:</h4>
          <input className='logininput11'
          type="text"
          value={username}
          name="username"
          onChange={(event) => setUsername(event.target.value)} 
          placeholder="Enter your Username"
          required/> 

{/* <label name="username">USERNAME</label>
       <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}  required/> */}

          <h4 className='a11'>Password:</h4>  
          <input className='logininput11' 
          type="password" 
          value={password}
          name="password" 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your Password" 
          required/>

           <button onSubmit={(e) => handleSubmit(e) } className='but11' type="submit">Login</button>
          <h3>------------- or -------------</h3>
          <center><div className="google" id='signInDiv' ></div></center><br/>
        </form>
          <br/><h4 className='ad11'>New User?</h4>
          <div className="create"><Link to="/SignupPage"><div className="b11"><u>Create New Account</u></div></Link></div>  
          </div>
      </div>
      <div>
    </div>
    </div></div>
    
  );
};

export default SigninPage;