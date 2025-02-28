import React from "react";
import "../styles/Profile.css";
import profileImage from "../assets/Profile3.jpg";
import ukFlag from "../assets/GB-Flag.png";
import waveEmoji from "../assets/Waving-Hand.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Profile = () => {
    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });
    };

    return (
        <section id="profile">
            <div className="profile-container">
                <div className="profile-image">
                    <img src={profileImage} alt="Dawid Ogrodniczuk" />
                </div>

                <div className="profile-content">
                    <h1> Hello, I'm <span className="highlighted-text">Dawid <img src={waveEmoji} alt="Wave Emoji" className="wave-icon" /></span></h1>
                    <h5> 📍 Dorchester, United Kingdom<img src={ukFlag} alt="UK Flag" className="flag-icon" /></h5>
                    <p>Recent Software Engineering Graduate with practical experience in developing full-stack applications and a commitment to expanding technical knowledge.</p>

                    <div className="profile-links">
                        <a href="/CV_Dawid.pdf" download="Dawid%20CV.pdf" className="cv-button">Download CV</a>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/dawid-ogrodniczuk/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://github.com/spiritl1ss" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} />
                            </a>
                            <a href="mailto:dawidogrodniczuk@icloud.com">
                                <FaEnvelope size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-arrow" onClick={scrollToNextSection}>
                <svg className="glowing-arrow" width="50" height="50" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M6 8l6 6 6-6"></path>
                    <path d="M6 14l6 6 6-6"></path>
                </svg>
            </div>
        </section>
    );
};

export default Profile;
