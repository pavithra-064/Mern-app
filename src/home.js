import { Button } from 'react-bootstrap';
import history from './history';
import "./App.css";
import { useState } from "react"  ;
import Axios from 'axios';

function App2(){
  const [username,setUsername]=useState('');
  const [pd,setPd]=useState('');
 // const[loginStatus,setLoginStatus]=useState('');
  
  const login =() =>{
   Axios.post("https://url-shortner-mern.herokuapp.com/login", {
     username: username,
     password: pd,
  }).then(res =>{
    alert(res.data.message)

    //serLoginUser(res.send.user)
    if(res.data.message==="Login Successful")
    history.push('/url')
    })
  }

 
    return (
      <div className="homie">
    <div className="Home"><h1>WELCOME!</h1>
  <h2>Login</h2>
  <form>
  <div className="form">
  <label className="labell">USERNAME:</label>
  <input  type="text" name="username" onChange={(e)=>{setUsername(e.target.value);}}/>
  <label className="labell">PASSWORD:</label>
  <input type="password"  onChange={(e)=>{setPd(e.target.value);}}/>
  <button variant="btn btn-success" target="_blank" onClick={login}>LOGIN</button>
  <h4 className="labell">NEW USER :<Button target="_blank" onClick={() => history.push('/register')}>Register</Button> Here </h4>
  </div>
  </form>
  </div>
  </div>
);
}

export default App2;

