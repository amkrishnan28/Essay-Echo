import React, { useState }from 'react';
import myImage from './logo.jpeg';
import ReactDOM from 'react-dom'; // Import ReactDOM

import axios from 'axios';
import './App.css';
import About from './components/About.js';

import {useNavigate} from 'react-router-dom';

function App() {

  const [showAbout, setShowAbout] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const form = document.getElementById("form")
    const form_username = document.getElementById("username")
    const form_password = document.getElementById("password")

    console.log(form_username.value);
    console.log(form_password.value);

    setUsername(form_username.value);
    setPassword(form_password.value);

    alert(form_password);

    let successLogin = true;

    console.log("checking prelim response");

    const response = await axios
        .post("http://localhost:8000/login", { username: form_username.value, password: form_password.value
        })
        .then(response => {
            console.log("User can log in");
        })
        .catch(() => {
          console.log("ERROR");
          successLogin = false;
        });
    

    if(successLogin){
      console.log(username);
      console.log(password);

      navigate(`/home?username=${encodeURIComponent(form_username.value)}`);
    } else {
      let timeForNewAccount = false;
      // does this user already EXIST in database?
      console.log(form_username.value)
      console.log("above test")

      const accountAlreadyExistsResponse = await axios.post("http://localhost:8000/get-user", {username: form_username.value}
      )
      .then(response => {
        console.log("ACCOUNT ALREADY EXISTS -> password is incorrect", response.data);
      })
      .catch(error => {
        console.log("Time for new account!", error);
        timeForNewAccount = true;
      });
      
      console.log("HERE BEFORE NEW ACCOUNT CHECK");

      if(timeForNewAccount){
        // can create new user nice

        const payload = {
          username: form_username.value, 
          password: form_password.value,
          name: form_username.value,
          essayPrompts: [] // starts as empty array initially
        };
        const createAccountResponse = await axios.post("http://localhost:8000/add-user", payload).then(response => {
          console.log("New Account Created!");

          console.log(username);
          console.log(password);

          navigate(`/home?username=${encodeURIComponent(form_username.value)}`);
        })
        .catch(() => {
          console.log("ERROR!");
          successLogin = false;
        });
      } else {
        alert("Login Failed!");
      }
    }
  };


  
  return (
    <div className="App">
      <section className="App-content">
        <div className="content">
          <img src={myImage} alt="My Image" className="logo" />
          <div className="login-form">
            <form className = "box" method = "post" id="form" onSubmit={handleLogin}>
              <h1> Login/Create Account </h1>
              <input type = "username" name = "username" id="username" placeholder = "Username"></input>
              <input type = "password" name = "password" id="password" placeholder = "Password"></input>
              <div style={{display: "flex", flexDirection: "row"}}>
                <input type = "submit" name = "loginButton" id="login" placeholder = "Login/Create Account" value="Log In"></input>
              </div>
              

            </form>
          </div>
          {/* <button onClick={() => setShowAbout(!showAbout)} id="about-link">About Us</button> */}
          
        </div>

        {showAbout && 
          <About></About>
        }

      </section>
    
      
    </div>
  );
}

export default App;