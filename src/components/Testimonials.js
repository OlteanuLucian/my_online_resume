import React from "react"
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
    return (
        <div className = "testimonials">
            <h1>my content clients</h1>
            <div className = "container">
                <div className = "testimonials-container">
                    {/* using react responsive carousel */}
                    < TestimonialsCarousel />
                </div>
            </div>

        </div>
    )
}

export default Testimonials;
