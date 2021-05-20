import React from "react"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import avatar1 from "../images/avatars/avatar-1.png"; 
import avatar2 from "../images/avatars/avatar-2.png"; 
import avatar3 from "../images/avatars/avatar-3.png"; 
import avatar4 from "../images/avatars/avatar-4.png"; 

const TestimonialsCarousel = () => {
    return (
       <Carousel
           showArrows = {true}
           infiniteLoop = {true}
           showThumbs = {true}
           showStatus = {false}
           autoPlay =  {true}
           interval = {4000}
        >
       <>
       <img src={avatar2} alt="Jennifer Aniston"/>
       <div className = "myCarousel">
            <h3>Jennifer Aniston</h3>
            <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum</p>
        </div>
       
        </>

        <>
        <img src={avatar1} alt="Russel Crowe"/>
        <div className = "myCarousel">
            <h3>Russel Crowe</h3>
            <p> Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nun.</p>
        </div>
        
        </>

        <>
        <img src={avatar3} alt="Al Pacino"/>
        <div className = "myCarousel">
            <h3>Al Pacino</h3>
            <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
        </div>
        
        </>

        <>
        <img src={avatar2} alt="Charlize Theron"/>
        <div className = "myCarousel">
            <h3>Charlize Theron</h3>
            <p>Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.</p>
        </div>
        
        </>
       </Carousel>
    )
}

export default TestimonialsCarousel;
