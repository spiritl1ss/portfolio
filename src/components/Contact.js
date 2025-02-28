import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-container">
                <div className="contact-content">
                    <h1>
                        Let's Get Connected
                        <span className="underline"></span>
                    </h1>
                    <p>
                        Whether you’re an employer looking for a passionate developer or have an exciting opportunity to discuss,
                        I’d love to connect. Feel free to reach out through LinkedIn, GitHub, or email, and I’ll be happy to chat!
                    </p>

                    <a href="mailto:dawidogrodniczuk@icloud.com" className="contact-button">Contact Me</a>

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
        </section>
    );
};

export default Contact;
