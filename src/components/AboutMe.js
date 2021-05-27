import React from "react";
import author from "../aboutme.jpg";



const AboutMe = () => {
    return (
        <div id = "about_me" className ="container py-5">
            <div className = "row">
                <div className = "col-lg-6 col-xm-12">
                    <div className = "photo-wrap mb-5">
                        <img className = "profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className = "col-lg-6 col-xm-12 about-me-text">
                
                    <h1 className = "about-heading">about me</h1>
                    
                    
                        <h4><span className="span1"> Hello!</span></h4>
                        <p>&emsp;My name is <span className="span2">Lucian</span> and I'm a freshly new  <span className="span3">junior front-end developer</span>.</p> 
                        <p>&emsp; I'm a results driven person who changed gears from the rig site to the office via The Informal School of IT. I just graduated the Web Development Course
                        with them as I’m aspiring to become a frontend web developer.</p>
                        <p>&emsp; I believe am an enthusiastic person who genuinely wants to develop necessary skills and qualities to have a successful career and future.</p> 
                        <p>&emsp;I am genuinely a positive person, I'm  sociable, hardworking and open-minded who knows to work well against deadlines.</p> 
                                              
                </div>
            </div>
        </div>
    )
}

export default AboutMe

