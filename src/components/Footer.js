import React from "react"
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share"
import {Link} from "react-scroll"
import Fade from "react-reveal/Fade";

const Footer = () => {
    return (
        <div className = "footer">
            <div className = "container">
                <div className = "row">
                <Fade delay={4000} duration={3000}>
                    <div className = "col-lg-4 col-md-6 col-sm-6">
                        <div className = "d-flex">
                            <a href="https://www.google.com/maps/place/Strada+George+Bari%C8%9Biu+24,+Cluj-Napoca+400000/@46.7727155,23.5836707,17z/data=!3m1!4b1!4m5!3m4!1s0x47490e9c76a6888b:0xc883245bf02d74c8!8m2!3d46.7727155!4d23.5858594" 
                            target="_blank">city Cluj-Napoca, G. Barițiu st., no 24, 400000 </a>
                        </div>
                        <div className = "d-flex">
                            <a href= "tel: +40748965216">+40748965216</a>
                        </div>
                        <div className = "d-flex">
                            <a href="mailto: lucianwebdev@gmail.com">lucianwebd@gmail.com</a>
                        </div>
                    </div></Fade>
                    <div className = "col-lg-3 col-md-2 col-sm-6">
                        <div className = "row">
                            <div className = "col">
                                <Link smooth={true} to ="home" offset = {-50}  className = "footer-nav">Home</Link>
                                <br></br>
                                <Link smooth={true} to ="about_me" offset = {-50} className = "footer-nav">About me</Link>
                                <br></br>
                                <Link smooth={true} to ="education" offset = {-50} className = "footer-nav">Education</Link>
                            </div>
                            <div className = "col">
                                <Link smooth={true} to ="services" offset = {-50} className = "footer-nav">Services</Link>
                                <br></br>
                                <Link smooth={true} to ="portfolio" offset = {-50} className = "footer-nav">Portfolio</Link>
                                <br></br>
                                <Link smooth={true} to ="contacts" offset = {-50} className = "footer-nav">Contact</Link>
                            </div>
                        </div>
                    </div>
                    <div className = "col-lg-4 col-md-4 col-sm-6 align-items-center">
                        
                        <div className ="d-flex justify-content-center">
                        <p>Share me on:</p>
                            <FacebookShareButton 
                                url={"https://github.com/OlteanuLucian"}
                                quote={"Web development"}
                                hashtag={ "#javascript"}
                            >
                                <FacebookIcon className="mx-3" size={36}/>
                            </FacebookShareButton>

                            <RedditShareButton 
                                url={"https://github.com/OlteanuLucian"}
                                quote={"Web development"}
                                hashtag={"#javascript"}
                            >
                                <RedditIcon className="mx-3" size={36}/>
                            </RedditShareButton>

                            <TwitterShareButton
                                url={"https://github.com/OlteanuLucian"}
                                quote={"Web development"}
                                hashtag={"#javascript"}
                            >
                                <TwitterIcon className="mx-3" size={36}/>
                            </TwitterShareButton>

                            <LinkedinShareButton 
                                url={"https://github.com/OlteanuLucian"}
                                quote={"Web development"}
                                hashtag={"#javascript"}
                            >
                                <LinkedinIcon className="mx-3" size={36}/>
                            </LinkedinShareButton>
                        </div>
                        <p className = "pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;LucianWebD | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
