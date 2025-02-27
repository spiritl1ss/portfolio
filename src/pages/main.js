import React, { useEffect } from "react";
import "../styles/main.css"; // Ensure this contains the particle CSS
import Navigation from "../components/Navigation";
import Profile from "../components/Profile";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Main = () => {
    useEffect(() => {
        const numParticles = 80; // Adjust number of particles
        const container = document.getElementById("particles-background");

        if (!container) return;

        // Clear existing particles to prevent duplication
        container.innerHTML = "";

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 10 + 5}s`; // Random float speed
            particle.style.animationDelay = `${Math.random() * 5}s`; // Staggered start

            container.appendChild(particle);
        }
    }, []);

    return (
        <div className="main-container">
            {/* Particle Background */}
            <div id="particles-background"></div>

            <div className="content-container">
                <Navigation />
                <Profile />
                <About />
                <Education />
                <Experience />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default Main;
