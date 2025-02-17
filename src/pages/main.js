import React, { useState } from "react";
import "../styles/main.css"; 
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import About from "../components/About";
import Education from "../components/Education";
import RelevantExperience from "../components/RelevantExperience";  
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Main = () => {
    const [activeSection, setActiveSection] = useState("relevant-experience");

    console.log("Active Section:", activeSection); // Debugging

    return (
        <div className="container">
            <div className="content-container">
                <Navigation />
                <Profile />
                <About />
                <Education />

                {/* Tab Navigation */}
                <div className="tab-menu">
                    <button
                        className={activeSection === "relevant-experience" ? "active" : ""}
                        onClick={() => setActiveSection("relevant-experience")}
                    >
                        Relevant Experience
                    </button>
                    <button
                        className={activeSection === "experience" ? "active" : ""}
                        onClick={() => setActiveSection("experience")}
                    >
                        Work Experience
                    </button>
                    <button
                        className={activeSection === "projects" ? "active" : ""}
                        onClick={() => setActiveSection("projects")}
                    >
                        Projects
                    </button>
                </div>

                {/* Conditionally Render Sections */}
                <div className="tab-content">
                    {activeSection === "relevant-experience" && <RelevantExperience />}
                    {activeSection === "experience" && <Experience />}
                    {activeSection === "projects" && <Projects />}
                </div>

                <Contact />
            </div>
        </div>
    );
};

export default Main;
