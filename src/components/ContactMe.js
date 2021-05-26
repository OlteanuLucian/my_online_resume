import React, {useState} from "react"
import emailjs from "emailjs-com"
import {useForm} from "react-hook-form"
import Fade from "react-reveal/Fade"

const ContactMe = () => {
    
    //form validation 

    const [successMessage, setSuccessMessage] = useState("");
    const {register, handleSubmit, formState:{errors}} = useForm();

    // email functionality with EMAILJS services

    const serviceID = "service_ID";
    const templateID= "template_ID";
    const userID = "user_1GTIu0i2eNaQ92oGlFhGy";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();
    } 
 
    const sendEmail = (serviceID, templateID, variables, userID) => {    
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
              setSuccessMessage("All good! I'll contact you ASAP.");
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
        <div id = "contacts" className = "contacts">
            <div className = "text-center">            
                <h1>contact me</h1>
            <p>Please fill out this form and describe your project ideas. I'll contact you as soon as possible. </p>
            <span className = "success-message">{successMessage}</span>
            </div>
            <div className = "container">
                <form onSubmit ={handleSubmit(onSubmit)}>
                    <div className = "row">
                        <div className = "col-md-6 col-xs-12">
                            {/* NAME INPUT */}
                            <div className = "text-center">
                                <input
                                    type = "text" 
                                    className = "form-control"
                                    placeholder = "Name"
                                    name = "name"
                                    {...register ("name", {
                                            required: "Please enter your name here",
                                            maxLength:{
                                                value:20,
                                                message: "Please enter a name with less than 20 characters"
                                            },
                                        })
                                    }
                                />
                                <div className = "line"></div>
                            </div>
                            <span className = "error-message">
                                {errors.name && errors.name.message}
                            </span>
                            {/* PHONE INPUT */}
                            <div className = "text-center">
                                <input
                                    type ="text" 
                                    className = "form-control"
                                    placeholder = "Phone"
                                    name = "phone"
                                    {...register ("phone", {
                                            required: "Please add your phone number here",
                                            pattern: {
                                                value:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,

                                                message: "Invalid phone number format"
                                            }
                                        })
                                    }
                                />
                                <div className = "line"></div>
                            </div>
                            <span className = "error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            {/* EMAIL INPUT */}
                            <div className = "text-center">
                                <input
                                    type = "email"
                                    className = "form-control"
                                    placeholder = "Email"
                                    name = "email"
                                    {...register ("email", {
                                            required: "Please provide your email address here",
                                            pattern: {
                                                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email format"
                                            }
                                        })
                                    }
                                />
                                <div className = "line"></div>
                            </div>
                            <span className = "error-message">
                                {errors.email && errors.email.message}
                            </span>
                            {/* SUBJECT INPUT */}
                            <div className = "text-center">
                                <input
                                    type = "text" 
                                    className = "form-control"
                                    placeholder = "Subject"
                                    name = "Subject"
                                    {...register ("subject", {
                                            required: "Please add a subject",  
                                        })
                                    }
                                />
                                <div className = "line"></div>
                            </div>
                            <span className = "error-message">
                                {errors.subject && errors.subject.message}
                            </span>          
                        </div>

                        <div className = "col-md-6 col-xs-12">
                            {/* DESCRIPTION */}
                            <div className = "text-center">
                                <textarea
                                    type= "textarea" 
                                    className = "form-control"
                                    placeholder = "Description"
                                    name = "description"
                                    {...register ("description", {
                                        required: "Please describe briefly your project needs",  
                                    })
                                }>
                                </textarea>
                                <div className = "line"></div> 
                            </div>
                            <span className = "error-message">
                                    {errors.description && errors.description.message}
                            </span>
                            <Fade delay={2000} duration={3000}><button className = "btn-contact-footer contacts-btn">contact me</button></Fade>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe;
