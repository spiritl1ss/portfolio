import React, { useState } from "react";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Main = () => {
    const [activeSection, setActiveSection] = useState("education");

    console.log("Active Section:", activeSection); // Debugging

    return (
        <div className="container">
            <Navigation />
            <About />

            {/* Tab Navigation */}
            <div className="tab-menu">
                <button
                    className={activeSection === "education" ? "active" : ""}
                    onClick={() => setActiveSection("education")}
                >
                    Education
                </button>
                <button
                    className={activeSection === "experience" ? "active" : ""}
                    onClick={() => setActiveSection("experience")}
                >
                    Experience
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
                {activeSection === "education" && <Education />}
                {activeSection === "experience" && <Experience />}
                {activeSection === "projects" && <Projects />}
            </div>

            <Contact />
        </div>
    );
};

export default Main;
