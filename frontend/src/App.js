import React, { useState }from 'react';
import myImage from './logo.jpeg';
import ReactDOM from 'react-dom'; // Import ReactDOM
import './App.css';
import About from './components/About.js';

import {useNavigate} from 'react-router-dom';

function App() {

  const [showAbout, setShowAbout] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate('/home'); // Navigate to the new page path
  };


  
  return (
    <div className="App">
      <section className="App-content">
        <div className="content">
          <img src={myImage} alt="My Image" className="logo" />
          <div className="login-form">
            <form class = "box" method = "post" onSubmit={handleLogin}>
              <h1> Login/Create Account </h1>
              <input type = "username" name = "inputUsername" id="username" placeholder = "Username"></input>
              <input type = "password" name = "inputPassword" id="password" placeholder = "Password"></input>
              <input type = "submit" name = "loginButton" id="login" placeholder = "Login/Create Account"></input>

            </form>
          </div>
          <button onClick={() => setShowAbout(!showAbout)} id="about-link">About Us</button>
          
        </div>

        {showAbout && 
          <About></About>
        }

      </section>
    
      
    </div>
  );
}

export default App;