import React, { useState } from "react";
import "../styles/Experience.css";
import XcelerateLogo from "../assets/Companies/xcelerate.png";
import DominosLogo from "../assets/Companies/Dominos.png";
import ProjectLogo from "../assets/Companies/project-experience-v2.png";
import BUImage from "../assets/Institutes/BournemouthUniversity.jpg";
import BUOceanHackathon from "../assets/Companies/Ocean-Hackathon.png";

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
                                        <li>Stayed up to date with industry developments to offer modern and effective solutions.</li>
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
                                        <li>Supervised team compliance with legal and company requirements, ensuring all employee documentation,
                                            such as work permits and visas, remained valid and up to date</li>
                                        <li>Streamlined operational workflows by managing daily administrative tasks, including paperwork and
                                            scheduling, improving overall efficiency.</li>
                                        <li>Collaborated with management to optimise team performance and align daily operations with broader
                                            business objectives.</li>
                                        <li>Resolved customer concerns quickly and effectively.</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === "relevant" && (
                        <>


                            <div className="experience-item">
                                <div className="experience-image">
                                    <img src={ProjectLogo} alt="Project" />
                                    </div>
                                <div className="experience-content">
                                    <h3>Project Experience</h3>
                                    <ul className="responsibilities-list">
                                        <li><strong>Business Systems Analysis and Design (BSAD)</strong> – Led a team of 8 to analyse and design business solutions, focusing on stakeholder communication, requirement gathering, and full-stack application development.</li>
                                        <li><strong>Systems Design</strong> – Collaborated in a team of 4 to create high-level system diagrams and process flows for a smart parking system.</li>
                                        <li><strong>Application Programming</strong> – Developed a Kotlin-based Battleships mobile game, implementing UI and game logic to pass pre-written test cases.</li>
                                        <li><strong>Advanced Development (Mobile Application)</strong> – Worked in a team of 8 to develop a fitness tracking app, utilising Agile methodologies and full-stack development.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="experience-item">
                                <div className="experience-image">
                                    <img src={BUOceanHackathon} alt="Bournemouth University Ocean Hackathon" />
                                </div>
                                <div className="experience-content">
                                    <h3>BU Ocean Hackathon - Sustainable Seaweed Farming and Wind Turbines</h3>
                                    <ul className="responsibilities-list">
                                        <li>Focused on the economic and environmental benefits of integrating seaweed farming with offshore wind farms, aiming to create local job opportunities and enhance sustainability.</li>
                                        <li>Collaborated with a multidisciplinary team of six to research and develop a solution within 48 hours.</li>
                                        <li>Designed a UI/UX prototype in Figma and developed a realistic solution utilizing kelp farming in offshore wind farm areas.</li>
                                        <li>Applied problem-solving, research, and rapid prototyping in a high-pressure, competitive hackathon environment.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="experience-item">
                                <div className="experience-image">
                                        <img src={BUImage} alt="Bournemouth University ClickASnap & Teemil Hackathon" />
                                        </div>
                                <div className="experience-content">
                                    <h3>Bournemouth University Hackathon (with ClickASnap & Teemil) – AI-Powered T-shirt Design</h3>
                                    <ul className="responsibilities-list">
                                        <li>Developed a Python Flask application that used AI to merge two images into a single design for T-shirt printing.</li>
                                        <li>Collaborated in a team of four to deliver a functional prototype within 48 hours in a fast-paced environment.</li>
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
