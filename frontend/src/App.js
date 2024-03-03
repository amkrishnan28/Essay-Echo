import React from 'react';
import myImage from './logo.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
  
      <section className="App-content">
        <div className="left-half">
        <img src={myImage} alt="My Image" className="logo" />
          <h2>About</h2>
          <p>
            This website is a demonstration of building a basic React application.
          </p>
          <h2>Features</h2>
          <ul>
            <li>Modern React development</li>
            <li>Scalable and reusable components</li>
            <li>Easy integration with other libraries and frameworks</li>
          </ul>
          <h2>Contact</h2>
          <p>
            Feel free to contact us for any inquiries or feedback.
          </p>
          <address>
            Email: example@example.com<br />
            Phone: +1 234 567 890
          </address>
        </div>
        <div className="right-half">
          <div>
            <a href="#about" id="about">About</a>
          </div>
          <div>
            <a href="#features"id="features">Features</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
