import React, { useState } from "react";
import "../styles/Experience.css";
import XcelerateLogo from "../assets/Companies/xcelerate.png";
import DominosLogo from "../assets/Companies/Dominos.png";

const Experience = () => {
    const [activeTab, setActiveTab] = useState("work");

    return (
        <section id="experience">
            <div className="experience-container">
                <h1>Experience</h1>

                <div className="experience-tab-menu">
                        <button
                            className={activeTab === "work" ? "active" : ""}
                            onClick={() => setActiveTab("work")}
                        >
                            Work Experience
                        </button>
                        <button
                            className={activeTab === "relevant" ? "active" : ""}
                            onClick={() => setActiveTab("relevant")}
                        >
                            Relevant Experience
                        </button>
                    </div>
                <div className="experience-holder">


                    <div className="vertical-line"></div>

                    {activeTab === "work" && (
                        <>
                            <div className="experience-item">
                                <div className="experience-image">
                                    <img src={XcelerateLogo} alt="Xcelerate Tuning" />
                                </div>
                                <div className="experience-content">
                                    <span>Sept 2023 - Present</span>
                                    <h3>XCELERATE Tuning - ECU Software Solutions</h3>
                                    <ul className="responsibilities-list">
                                        <li>Designed and implemented custom vehicle tuning software solutions.</li>
                                        <li>Conducted advanced diagnostics for complex system issues.</li>
                                        <li>Managed end-to-end client projects and business operations.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="experience-item">
                                <div className="experience-image">
                                    <img src={DominosLogo} alt="Dominos" />
                                </div>
                                <div className="experience-content">
                                    <span>June 2017 - Present</span>
                                    <h3>Domino's - Shift Manager</h3>
                                    <ul className="responsibilities-list">
                                        <li>Supervised team compliance with legal and company requirements.</li>
                                        <li>Streamlined operational workflows and scheduling.</li>
                                        <li>Resolved customer concerns quickly and effectively.</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === "relevant" && (
                        <>
                            <div className="experience-item">
                                <div className="experience-content">
                                    <h3>Software Development Projects</h3>
                                    <ul className="responsibilities-list">
                                        <li>Developed full-stack web applications using React, Node.js, and SQL.</li>
                                        <li>Built a vehicle diagnostic tool for tuning and remapping ECUs.</li>
                                        <li>Implemented machine learning models for predictive analytics.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="experience-item">
                                <div className="experience-content">
                                    <h3>Freelance Software Engineering</h3>
                                    <ul className="responsibilities-list">
                                        <li>Created custom automation scripts for small businesses.</li>
                                        <li>Integrated third-party APIs into existing software platforms.</li>
                                        <li>Designed and optimized SQL databases for performance.</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
