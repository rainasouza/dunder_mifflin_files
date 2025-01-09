import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Dunder Mifflin Files</h1>
            <p>
                This website is a fan-made project dedicated to the beloved TV show <em>The Office</em>. It utilizes data from two amazing APIs:
            </p>
            <ul>
                <li>
                    <a href="https://akashrajpurohit.github.io/the-office-api/" target="_blank" rel="noopener noreferrer">
                        The Office API by Akash Rajpurohit
                    </a>
                </li>
                <li>
                    <a href="https://theofficeapi.dev/" target="_blank" rel="noopener noreferrer">
                        The Office API
                    </a>
                </li>
            </ul>
            <p>
                The purpose of this website is purely for entertainment. It aims to provide fans with an engaging way to explore the characters, episodes, and more from <em>The Office</em>.
            </p>
            <p>
                Please note that this site is not affiliated with or endorsed by NBC or the creators of <em>The Office</em>. All data is sourced from the APIs mentioned above, and all rights belong to their respective owners.
            </p>
            <p>Developed by Raína Araújo </p>
        </div>
    );
};

export default About;
