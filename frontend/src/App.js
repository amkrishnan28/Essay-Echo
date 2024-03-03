import React from 'react';
import myImage from './logo.jpeg';
import './App.css';

function App() {
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
          
          <h2 id="about" >About</h2>
          <p id = "about-text">
            This website is a demonstration of building a basic React application.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;