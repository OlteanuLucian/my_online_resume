import React from "react"

const ContactMe = () => {
    return (
        <div className = "contacts">
            <div className = "text-center">            
                <h1>contact me</h1>
            <p>Please fill out this form and describe your ideas. I'll contact you as soon as possible. </p>
            </div>
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-6 col-xs-12">
                    {/* NAME INPUT */}
                    <input
                        type = "text" 
                        className = "form-control"
                        placeholder = "Name"
                        name = "name"
                    />
                    {/* PHONE INPUT */}
                    <input
                        type ="text" 
                        className = "form-control"
                        placeholder = "Phone"
                        phone = "phone"
                    />
                    {/* EMAIL INPUT */}
                    <input
                        type = "email"
                        className = "form-control"
                        placeholder = "Email"
                        email = "email"
                    />
                    {/* SUBJECT INPUT */}
                    <input
                        type = "text" 
                        className = "form-control"
                        placeholder = "Subject"
                        subject = "Subject"
                    />
                    </div>

                    <div className = "col-md-6 col-xs-12">
                    {/* DESCRIPTION */}
                    <textarea
                        type= "textarea" 
                        className = "form-control"
                        placeholder = "Description"
                        description = "description"
                    ></textarea>
                    {/* CONTACT ME BUTTON */}
                    <button className = "btn-main-offer contacts-btn">contact me</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactMe;
