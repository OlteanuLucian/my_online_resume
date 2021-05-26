import React from "react";
import author from "../aboutme.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


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
                    
                    
                    {/* <div className= "about-me-text"> */}
                        <p><span className="span1"> Hello!</span></p>

                        <p>&emsp;My name is <span className="span2">Lucian</span> and I'm a freshly new  <span className="span3">junior front-end developer</span>.</p> 
                        <p>&emsp; I'm currently a beginner, but I'm eager to learn new things everyday and develop my skills. </p>
                        <p>&emsp; I'm a sociable, hardworking, open-minded person who knows to work well against deadlines.</p>
                        <p>&emsp; sd;lfkjsd;kljf;l</p>
                        {/* <div>
                            <span className="span1"> Hello!</span>
                        </div>
                        <div> 
                            &emsp; My name is <span className="span2">Lucian</span> and I'm a freshly new  <span className="span3">junior front-end developer</span>.
                        </div>
                        <div> 
                            &emsp; I'm currently a beginner, but I'm eager to learn new things everyday and develop my skills.
                        </div>
                        <div>
                            &emsp; I'm a sociable, hardworking, open-minded person who knows to work well against deadlines.
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default AboutMe

