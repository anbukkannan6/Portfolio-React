import React from "react";

export default function SkillComp() {

    return (
        <>
            <h1>Skills Tech Stack </h1>
            <div className="skill_main_container">
                <div className="html_container">
                    <img />
                    <p>
                        Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.
                    </p>
                </div>
                <div className="javascript_container">
                    <img />
                    <p>
                        Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality
                    </p>
                </div>
                <div className="react_container">
                    <img />
                    <p>
                        Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture                    </p>
                </div>

            </div>
              {/* Education Section */}
              <h1>Education</h1>
              <div className="education_main_container">
                    <h1>B.E Electronics and communication engineering</h1>
                    <h3>Mnsk College of engineering Cgpa 6.56</h3>
                    <h1>HSC</h1>
                    <h3>St.Mariys Hr sec School percentage:74%</h3>
                    <h1>SSLC</h1>
                    <h3>St.Xavier Metric Hr.Sec.School percentage:89%</h3>
                </div>

        </>
    )
}