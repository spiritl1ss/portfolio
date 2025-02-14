import React from "react";
import "../styles/About.css";
import pfp from "../assets/Profile.jpg"; 
import ukFlag from "../assets/GB-Flag.png";
import WaveEmoji from "../assets/Waving-Hand.png"; 

const About = () => {
    return (
        <section id="about" className="about-container">
            {/* Left Side: */}
            <div className="profile-picture">
                <img src={pfp} alt="Dawid Ogrodniczuk" />
            </div>

            {/* Right Side: */}
            <div className="about-text">
                <h1> Hello, I'm <span style={{ color: "#FF5F1F" }}>Dawid <img src={WaveEmoji} alt="Wave Emoji" className="wave-icon" />.</span></h1>
                <h5> 📍 Dorchester, United Kingdom<img src={ukFlag} alt="UK Flag" className="flag-icon" /></h5>
                <p> Recent Software Engineering Graduate with practical experience in developing full-stack applications and commitment to expanding technical knowledge.</p>
                <p>
                    <a href="/your_cv_link_here.pdf" download>Download CV</a>
                </p>
                
            </div>
        <div className="summary">
                <h1>Summary</h1>
                <p>
                    Former **Shift Manager** with **8+ years** of leadership experience, transitioning into Software Engineering.
                    Proven ability to **lead teams, manage operations, and solve complex problems**. 
                    Key skills include:
                </p>
                <ul>
                    <li>💻 **Full-stack development**: Built multiple projects using Python, Java, SQL, and web technologies.</li>
                    <li>⚙️ **Technical troubleshooting**: Strong debugging skills & system diagnostics.</li>
                    <li>🧑‍💼 **Leadership & Teamwork**: Managed teams, optimized workflows, and improved efficiency.</li>
                    <li>🚀 **Fast learner & adaptable**: Quickly picks up new technologies & methodologies.</li>
                </ul>
        </div>
            
        </section>
    );
};

export default About;
