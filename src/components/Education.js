import React from "react";
import "../styles/Education.css";
import BUImage from "../assets/Institutes/BournemouthUniversity.jpg";
import WEYImage from "../assets/Institutes/WeymouthCollege.jpg";

const Education = () => {
  return (
    <section id="education">
      <div className="education-container">
        <h1>Education</h1>
        <div className="education-holder">
          <div className="vertical-line"></div>

          <div className="education-item">
            <div className="education-image">
              <img src={BUImage} alt="Bournemouth University" />
            </div>
            <div className="education-content">
              <span>Sept 2021 – 2024</span>
              <h3>Bournemouth University, Faculty of Computing</h3>
              <p>Bachelor of Science in Software Engineering</p>
              <p className="modules-text">
                Modules: Software Engineering, Mobile Software Development, Database Management,
                Machine Learning, Information Assurance, System Designs, Business Systems Analysis
                and Design
              </p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-image">
              <img src={WEYImage} alt="Weymouth College" />
            </div>
            <div className="education-content">
              <span>Sept 2019 – 2021</span>
              <h3>Weymouth College, Faculty of Computing</h3>
              <p>Level 3 IT Extended Diploma</p>
              <p className="modules-text">Modules included: .NET, C#, Python</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
