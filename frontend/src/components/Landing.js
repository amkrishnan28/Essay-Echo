import React from 'react';
import './Landing.css';
import myImage from './logo1.jpeg';

function Landing() {
    return (
        <div>
            <div className="upper-left">
                <img src={myImage} alt="My Image" className="logo" />
            </div>

            <div className="upper-right">
                <h1 id="username">Username</h1>
            </div>

            <div className="centered-form">
                <form>
                    <div>
                        <label htmlFor="Prompt">Prompt:  </label>
                        <input type="text" id="Prompt" name="Prompt" placeholder="Enter Prompt:" required />
                    </div>  
                    <div>
                        <label htmlFor="College">College:  </label>
                        <input type="text" id="College" name="College" placeholder="Enter College:" required />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Landing;
