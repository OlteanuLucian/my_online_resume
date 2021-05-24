import React from "react";
import Typed from "react-typed"
import {Link} from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaHtml5, FaCss3, FaJsSquare, FaReact, FaGitSquare } from "react-icons/fa";

const Header = () => {
    return (
        <div id = "home" className="header-wrapper">
            <div className="main-info">
                <h2>
                   Lucian Olteanu, junior web developer
                </h2>
                
                <Typed
                    className="typed-text"
                    strings={["Web Development", "Web Design", "Blog Design"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to ="contacts" offset = {-50}><button className = "btn-contact-header">contact me</button></Link>
                <ul className="skill-icons-container">
                    <li>
                        <a className = "icon-source" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
                            <FaHtml5 color="#e34c26" size= "4rem"/>
                        </a>
                   </li> 
                    <li>
                        <a className = "icon-source" href = "https://www.w3schools.com/css/">
                            <FaCss3 color= "#264de4" size="4rem"/>
                        </a>
                   </li> 
                    <li>
                        <a className = "icon-source" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                            <FaJsSquare color="#f0db4f" size="4rem"/>  
                        </a>
                   </li> 
                    <li>
                        <a className = "icon-source" href = "https://reactjs.org/">
                            <FaReact color="#61DBFB" size="4rem"/>
                        </a>
                   </li> 
                   <li>
                        <a className = "icon-source" href = "https://git-scm.com/">
                            <FaGitSquare color="#4078c0" size="4rem"/>
                        </a>
                   </li>
                    
                </ul>
                
            </div>
        </div>



    )
}

export default Header;
