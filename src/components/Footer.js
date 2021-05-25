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


const Footer = () => {
    return (
        <div className = "footer">
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-4 col-md-6 col-sm-6">
                        <div className = "d-flex">
                            <p>city Cluj-Napoca, G. Barițiu st., no 34, </p>
                        </div>
                        <div className = "d-flex">
                            <a href= "tel: +40748965216">+40748965216</a>
                        </div>
                        <div className = "d-flex">
                            <p>lucianwebd@gmail.com</p>
                        </div>
                    </div>
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
