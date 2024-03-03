import React, { useState }from 'react';
import myImage from './logo.jpeg';
import ReactDOM from 'react-dom'; // Import ReactDOM
import './App.css';
import About from './components/About.js';

function App() {

  const [showAbout, setShowAbout] = useState(false);

  
  return (
    <div className="App">
      <section className="App-content">
        <div className="content">
          <img src={myImage} alt="My Image" className="logo" />
          <div className="login-form">
            <form class = "box" method = "post">
              <h1> Login/Create Account </h1>
              <input type = "username" name = "" placeholder = "Username"></input>
              <input type = "password" name = "" placeholder = "Password"></input>
              <input type = "submit" name = "" placeholder = "Login/Create Account"></input>

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