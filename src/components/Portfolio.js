import React from 'react'
import blog from "../images/mern-blog.png";
import cityGuide from "../images/city-guide-app.png";
import netflix from "../images/netflix.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png"
//IMPORT FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";





const Portfolio = () => {
    return (
        <div className = "portfolio-wrapper">
            <div className = "container">
                <h1 className ="text-uppercase text-center py-5">portfolio</h1>
                <div className = "image-box-wrapper row justify-content-center">
                    <div className = "portfolio-img-box">
                        <img className = "portfolio-img" src = {netflix} alt ="Netflix Clone Project"/>
                        <div className = "overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
                        {/* - */}
                    <div className = "portfolio-img-box">
                        <img className = "portfolio-img" src = {cityGuide} alt ="City Guide Project"/>
                        <div className = "overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
                        {/* - */}
                    <div className = "portfolio-img-box">
                        <img className = "portfolio-img" src = {portfolio} alt ="Portfolio Project"/>
                        <div className = "overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
                        {/* - */}
                    <div className = "portfolio-img-box">
                        <img className = "portfolio-img" src = {taskManager} alt ="Task Manager Project"/>
                        <div className = "overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
                        {/* - */}
                    <div className = "portfolio-img-box">
                        <img className = "portfolio-img" src = {blog} alt ="Blog Project"/>
                        <div className = "overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;
