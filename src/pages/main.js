import React, { useState } from "react";
import "../styles/main.css"; 
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";  // New merged experience component
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Main = () => {
    return (
        <div className="container">
            <div className="content-container">
                <Navigation />
                <Profile />
                <About />
                <Education />
                <Experience />
                <Contact />
            </div>
        </div>
    );
};

export default Main;
