import React from "react";
import Typed from "react-typed"
import {Link} from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaHtml5, FaCss3, FaBootstrap, FaJsSquare, FaReact } from "react-icons/fa";

const Header = () => {
    return (
        <div id = "home" className="header-wrapper">
            <div className="main-info">
                <h2>
                   Lucian Olteanu, junior web developer
                </h2>
                
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Blog Design"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to ="contacts" offset = {-50}><button className = "btn-contact-header">contact me</button></Link>
        <div>
                <ul className="skill-icons-container">
                    <li>
                    <FaHtml5 color="#e34c26" size= "4rem"/> 
                   </li> 
                    <li>
                    <FaCss3 color= "#264de4" size="4rem"/>
                   </li>
                   <li>
                    <FaBootstrap color="#563d7c" size="4rem"/>
                   </li>  
                    <li>
                    <FaJsSquare color="#f0db4f" size="4rem"/>  
                   </li> 
                    <li>
                    <FaReact color="#61DBFB" size="4rem"/>
                   </li> 
                    
                    
                </ul>
                </div>
            </div>
        </div>



    )
}

export default Header;
