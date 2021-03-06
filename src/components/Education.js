import { faCentercode } from "@fortawesome/free-brands-svg-icons"
import { faFileExcel } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import scitLogo from "../scit.png";
import uaicLogo from "../uaic.png"

const Education = () => {
    return (
        <div id = "education" className="education">
            <div className="d-flex justify-content-center my-5">
                <h1>education</h1>
            </div>            
            <div className="container education-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className = "timeline-content">

                        <div className = "capsule-logo-education">
                        <img src = {scitLogo} alt = "scit logo" width = "120px"/>

                        <h4> 2021-2021 - The Informal School of IT, Cluj-Napoca</h4>
                        
                        </div>
                        <p><strong>Web Development</strong></p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className = "timeline-content">
                    <div className = "capsule-logo-education">
                        <img src = {scitLogo} alt = "scit logo" width = "120px"/>
                        <h4>2020-2020 - The Informal School of IT, Cluj-Napoca</h4>
                        </div>
                        <p><strong>Intro in IT</strong></p>
                        
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className = "timeline-content">
                    <div className = "capsule-logo-education">
                        <img src={uaicLogo} alt = "scit logo" width = "60px"/>
                        <h4>2009-2011 - University "Al. I. Cuza" Ia??i</h4>
                        </div>
                        <p><strong>MSc. Environmental Geochemistry</strong></p>
                        
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className = "timeline-content">
                    <div className = "capsule-logo-education">
                        <img src={uaicLogo} alt = "scit logo" width = "60px"/>
                        <h4>2004-2009 - University "Al. I. Cuza" Ia??i</h4>
                        </div>
                        <p><strong>BSc. Engineering Geology</strong></p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;

