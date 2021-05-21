import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>
                    web development and websites design
                </h1>
                <Typed
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Blog Design"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>



    )
}

export default Header;
