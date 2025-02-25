import React from "react";
import "../styles/Navigation.css";

const Navigation = () => {
    return (

        <div className="nav-wrapper">
            <div className="left-side">
                <ul>
                    <li><a href="">&lt;DEV&gt;</a></li>
                </ul>
            </div>
            <div className="right-side">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Navigation;
