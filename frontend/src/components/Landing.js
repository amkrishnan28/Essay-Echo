import React, {useState, useEffect} from 'react';
import './Landing.css';
import { useSearchParams } from 'react-router-dom';
import myImage from './logo1.jpeg';

import '../App.css'; // Import your CSS file for styling

import axios from 'axios';

function LandingPage() {

    const [prompts, setPrompts] = useState([]);
    const [colleges, setColleges] = useState([]);

    let [searchParams] = useSearchParams();

    const username = searchParams.get('username');

    useEffect(() => {
        const fetchPrompts = async () => {
            try {
                console.log("testing here");
                const response = await axios.post(`http://localhost:8000/user/prompts`, {
                    username: username
                });
                setPrompts(response.data);
            } catch (error) {
                console.error("Error fetching prompts:", error);
            }
        };

        if (username) {
            fetchPrompts();
        }
    }, [username]);

    const similarPromptsClick = async () => {
        try {
            const response = await axios.post("http://localhost:8000/get-similar-prompts", {prompts});
            console.log("Hello")
            console.log(response.data.message);
            console.log(response.data)
            
            document.getElementById('recommendations').innerHTML = response.data.message;

        } catch (error) {
            console.error("Error fetching similar prompts:", error);
        }
    }

    const handleSubmitClick = async (e) => {
        alert("CLICKED");

        e.preventDefault(); // Prevent default form submission
    
       
        const form_prompt = document.getElementById("prompt")
        const form_college = document.getElementById("college")
    
        console.log(form_prompt.value);
        console.log(form_college.value);
    
        // let newPrompts = prompts;
        // newPrompts.push(form_prompt.value);
        // setPrompts(newPrompts);

        // let newColleges = colleges;
        // newColleges.push(form_college.value);
        // setColleges(newColleges);
        console.log("hope for the best! when adding");
        try {
            const response = await axios.post("http://localhost:8000/user/add-prompt", {
                prompt: form_prompt.value, 
                college: form_college.value, 
                username: username
            });
            console.log("New Prompt Added!", response.data);
        } catch (error) {
            console.log("ERROR", error.response.data);
        }
        
        
      };

  return (
    <div className="landing-page">
        
      <header>
        <img src="banner-image.jpg" alt="EssayMatch Banner" />
        <h1>EssayMatch: Your College and Scholarship Essay Companion</h1>
        <h2>Streamline Your Essay Writing Process with EssayMatch!</h2>
        <p>Submit your essay prompts and let EssayMatch find common themes across your essays to simplify your college and scholarship applications.</p>
      </header>
      
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Prompt Matching</li>
          <li>Similarity Score Calculation</li>
          <li>Feedback and Suggestions</li>
          <li>Resource Library</li>
          <li>Privacy and Security</li>
          <li>Accessibility Features</li>
          <li>User Dashboard</li>
          <li>Integration with College/Scholarship Platforms</li>
          <li>Community and Support</li>
        </ul>
      </section>
    
      <div className="centered-form">
          <form onSubmit={handleSubmitClick}>
              <div>
                  <label htmlFor="Prompt">Prompt:  </label>
                  <input type="text" id="prompt" name="Prompt" placeholder="Enter Prompt:" required />
              </div>  
              <div>
                  <label htmlFor="College">College:  </label>
                  <input type="text" id="college" name="College" placeholder="Enter College:" required />
              </div>
              <input type="submit" value="Submit" />
          </form>
      </div>

      <ul>
            {prompts.map((prompt, index) => (
                <li key={index}>{prompt.prompt} - {prompt.college}</li>
            ))}
        </ul>
      
        <div style={{display: "flex", flexDirection: "column",justifyContent: "center"}}>
            <button className="submit-button" onClick={similarPromptsClick}>Get Personalized Recommendations - courtesy of GPT-4</button>
        </div>

        <h2>Best Prompts to Tackle! In this order, these prompts are similar and can be tackled almost simultaneously!</h2>

        <p id="recommendations"></p>

      
      <footer>
        <nav>
          <a href="#">About Us</a>
          <a href="#">FAQs</a>
          <a href="#">Contact</a>
          <a href="#">Terms of Service</a>
        </nav>
        <div className="social-media">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p>&copy; 2024 EssayMatch. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
