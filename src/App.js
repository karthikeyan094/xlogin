import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username,setUsername] = useState('');
  const[password,setPassword] =useState('');
  const[loggedIn,setLoggedIn] = useState(false);
  const [showError,setShowError] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(username==='user' && password==='password') {
      setLoggedIn(true);
      setShowError(false);
    }else{
      setShowError(true);
    }
  }
  return (
    <div>
      <h1>Login Page</h1>
       {showError && <p>Invalid username or password</p>}
      {loggedIn ? <p>Welcome, user!</p> :
      <form onSubmit={(e)=> handleSubmit(e)}>
        <label>Username:</label>
        <input type='text' required value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
        <label>Password:</label> 
        <input type='password'required value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
        <button type='submit'>Submit</button>
      </form>}
   
    </div>
  );
}

export default App;
