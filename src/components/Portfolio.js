import React from 'react'
import cityGuide from "../images/city-guide-app.png";
import taskManager from "../images/task-manager.png"
import blog from "../images/mern-blog.png";
//IMPORT FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//React Popup Box
import {PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"


const Portfolio = () => {
    
    //Task Manager Project
    const openPopupboxTaskManager = () => {
        const content =(       
        <>
        <img className= "portfolio-img-popupbox" src={taskManager} alt="Task Manager App Project"/>
        <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick = {()=> window.open ("https://github.com/OlteanuLucian/home-study")}>https://github.com/OlteanuLucian/home-study</a>
        </>
    )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Task Manager App Project",
              },
            },
          });
    }
    
    const popupboxConfigTaskManager={
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500
    }    
    
     //City Guide App
     const openPopupboxCityGuide = () => {
        const content =(       
        <>
        <img className= "portfolio-img-popupbox" src={cityGuide} alt="City Guide Project"/>
        <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick = {()=> window.open ("https://github.com/OlteanuLucian/home-study")}>https://github.com/OlteanuLucian/home-study</a>
        </>
    )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: { 
                  text: "City Guide App Project",
              },
            },
          });
    }
    
    const popupboxConfigCityGuide={
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 500
        
    }  
    
    
    //Blog Project
    const openPopupboxBlogProject = () => {
        const content =(       
        <>
        <img className= "portfolio-img-popupbox" src={blog} alt="Blog Design Project"/>
        <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick = {()=> window.open ("https://github.com/OlteanuLucian/home-study")}>https://github.com/OlteanuLucian/home-study</a>
        </>
    )
        PopupboxManager.open({content});
        PopupboxManager.update({
            content,
            config: {
              titleBar: {
                text: "Blog Design Project",
              },
            },
          });
    }
    
    const popupboxConfigBlogProject={
        titleBar: {
            enable: true,
        },
        fadeIn: true,
        fadeInSpeed: 1000
    } 

 
    
    return (
        <div id = "portfolio" className = "portfolio-wrapper">
            <div className = "container">
                <h1 className ="text-uppercase text-center py-5">portfolio</h1>
                <div className = "image-box-wrapper row justify-content-center">
                    
                <div className = "portfolio-img-box" onClick={openPopupboxTaskManager}>
                        <img className = "portfolio-img" src = {taskManager} alt ="Task Manager Project"/>
                        <div className = "overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
                        {/* - */}
                    <div className = "portfolio-img-box" onClick={openPopupboxCityGuide}>
                        <img className = "portfolio-img" src = {cityGuide} alt ="City Guide Project"/>
                        <div className = "overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
                        {/* - */}
                    <div className = "portfolio-img-box" onClick={openPopupboxBlogProject}>
                        <img className = "portfolio-img" src = {blog} alt ="Blog Project"/>
                        <div className = "overflow"></div>
                        <FontAwesomeIcon className = "portfolio-icon" icon = {faSearchPlus}/>
                    </div>
                </div>
            </div>
            
            < PopupboxContainer {...popupboxConfigTaskManager} />
            < PopupboxContainer {...popupboxConfigCityGuide} />
            < PopupboxContainer {...popupboxConfigBlogProject} />
        </div>

    )
}

export default Portfolio;
