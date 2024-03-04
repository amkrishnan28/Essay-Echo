import React from 'react';
import '../App.css'; // Import your CSS file for styling

import axios from 'axios';

function LandingPage() {

    const similarPromptsClick = async () => {
        try {
            const response = await axios.post("http://localhost:8000/get-similar-prompts");
            console.log(response.data.message);
        } catch (error) {
            console.error("Error fetching similar prompts:", error);
        }
    }

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
      
      <button className="submit-button" onClick={similarPromptsClick}>Submit Your Prompts</button>
      
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
