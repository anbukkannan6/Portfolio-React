import React from "react";
import image from "./../assets/anbu_image.png"

export default function NavebarComp(){

    return(
        <>
        <div className="navebar_main_container">
            <h1>PortFolio</h1>
            <div className="menu_container">
               <ul>
                <li>Home</li>
                <li>Skills</li>
                <li>Project</li>
                <li>About</li>
                <li>Contact</li>
               </ul>
            </div>
        </div>
        {/* Hero Section */}
        <div className="hero_container">
            <div className="left_hero">
                <h2>Hi</h2>
                <h2>Iam ANBUKKANNAN</h2>
                <h2>FRONTEND DEVELOPER</h2>
                <p>Aspiring to became an IT prfofession..Working knowlde in the front end tech and willing to work in Your project</p>
                <span>GIT</span>
                <span>lINKED IN</span>
                <span>WHATSAPP</span>
                <span >CODE</span>
                <button className="btn btn-danger">Resume</button>
            </div>
            <div className="right_hero"></div>
            <div>
                <img className="hero_image" src={image}/>
            </div>

        </div>
        </>
    )
}