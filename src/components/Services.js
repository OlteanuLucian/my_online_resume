import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";




const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">my services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                            <h3>Web Design</h3>
                            <p>I approach each project individually and always focus on the result</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                            <h3>Web Development</h3>
                            <p>Your website will be build with the latest technologies</p>
                        </div>
                    </div>
                    {/* - */}
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faBlog} size="2x" /></div>
                            <h3>Blog design</h3>
                            <p>Your blog will get a design for the best user experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
