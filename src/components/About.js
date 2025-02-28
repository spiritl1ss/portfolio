import React from "react";
import "../styles/About.css";

import JavaIcon from "../assets/icons/java-original.svg";
import JavaScriptIcon from "../assets/icons/javascript-original.svg";
import PythonIcon from "../assets/icons/python-original.svg";
import CSharpIcon from "../assets/icons/csharp-original.svg";
import ReactIcon from "../assets/icons/react-original.svg";
import NextJsIcon from "../assets/icons/nextjs-original.svg";
import FlaskIcon from "../assets/icons/flask-original.svg";
import NodeJsIcon from "../assets/icons/nodejs-original.svg";
import MySQLIcon from "../assets/icons/mysql-original.svg";
import OracleIcon from "../assets/icons/oracle-original.svg";
import DevOpsIcon from "../assets/icons/azuredevops-original.svg";
import AgileIcon from "../assets/icons/agile.png";
import DockerIcon from "../assets/icons/docker-original.svg";
import GitIcon from "../assets/icons/git-original.svg";
import FigmaIcon from "../assets/icons/figma-original.svg";

const techStack = [
    { name: "Java", icon: JavaIcon, category: "Language" },
    { name: "Python", icon: PythonIcon, category: "Language" },
    { name: "C#", icon: CSharpIcon, category: "Language" },
    { name: "JavaScript", icon: JavaScriptIcon, category: "Language" },
    { name: "React", icon: ReactIcon, category: "Framework" },
    { name: "Next.js", icon: NextJsIcon, category: "Framework" },
    { name: "Flask", icon: FlaskIcon, category: "Framework" },
    { name: "Node.js", icon: NodeJsIcon, category: "Backend" },
    { name: "MySQL", icon: MySQLIcon, category: "Database" },
    { name: "Oracle SQL", icon: OracleIcon, category: "Database" },
    { name: "DevOps", icon: DevOpsIcon, category: "Practice" },
    { name: "Agile", icon: AgileIcon, category: "Practice" },
    { name: "Docker", icon: DockerIcon, category: "Tool" },
    { name: "Git", icon: GitIcon, category: "Tool" },
    { name: "Figma", icon: FigmaIcon, category: "UI" }
];


const About = () => {
    return (
        <section id="about">
            <div className="about-container">

                <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                        Graduate Software Engineer with a knack for building meaningful solutions.
                        When I'm not immersed in code, you'll find me experimenting with cars & modification solutions.
                        I enjoy solving problems and am looking for a role where I can keep learning, contribute, and make a difference.
                    </p>
                    <h2>Stack</h2>
                </div>

                <div className="techstacks">
                    <div className="techstack-grid">
                        {techStack.map((tech, index) => (
                            <div className="stack-item" key={index}>
                                <img src={tech.icon} alt={tech.name} width={50} height={50} />
                                <span className="stack-name">{tech.name}</span>
                                <span className="stack-category">{tech.category}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
