import { faCentercode } from "@fortawesome/free-brands-svg-icons"
import { faFileExcel } from "@fortawesome/free-solid-svg-icons"
import React from "react"

const Experience = () => {
    return (
        <div id = "experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>            
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className = "timeline-content">
                        <h3>2020 - current</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className = "timeline-content">
                        <h3>2018-2020</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className = "timeline-content">
                        <h3>2014-2018</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;

