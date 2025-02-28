import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/main.css";
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Main = () => {
    useEffect(() => {
        const numParticles = 200;
        const container = document.getElementById("particles-background");

        if (!container) return;
        container.innerHTML = "";

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";

            const topPosition = Math.random() * 100;
            const leftPosition = Math.random() * 100;

            const size = Math.random() * 6 + 2;
            const opacity = Math.random() * 0.5 + 0.3;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.top = `${topPosition}vh`;
            particle.style.left = `${leftPosition}vw`;
            particle.style.opacity = opacity;

            container.appendChild(particle);
        }
    }, []);

    return (
        <div className="main-container">
            <div id="particles-background"></div>

            <div className="content-container">
                <Navigation />

                {[Profile, About, Education, Experience, Contact, Footer].map((Component, index) => (
                    <motion.section
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <Component />
                    </motion.section>
                ))}
            </div>
        </div>
    );
};

export default Main;
