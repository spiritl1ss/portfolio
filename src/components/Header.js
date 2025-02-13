import React from "react";

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="nav-wrapper">
                <ul>
                    <li><a href="#about">Home</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
