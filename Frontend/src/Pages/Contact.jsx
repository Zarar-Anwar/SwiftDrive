import React, {useContext, useState} from "react";
import {Store} from "../Utils/Store";
import {Link} from "react-router-dom";
import api from "../Utils/Axios";
import {toast} from "react-toastify";

const Contact = () => {
    const {state} = useContext(Store);
    const {ContactInfo} = state; // Contact info from the Store
    const [error, setError] = useState("");

    // Set form state
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    // Handle form input changes
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/contact-us/', formData);
            toast.success("Forms Submitted SuccessFully")
        } catch (err) {
            if (err.response && err.response.data) {
                const errorData = err.response.data;

                if (errorData && typeof errorData === 'object') {
                    Object.keys(errorData).forEach((field) => {
                        const errorMessages = errorData[field];
                        if (Array.isArray(errorMessages)) {
                            errorMessages.forEach((message) => {
                                toast.error(`${field}: ${message}`);
                                setError(`* ${message}`);// Show each error message

                            });
                        }
                    });
                }
            } else {
                toast.error("An error occurred. Please try again later.");
            }
        }
    };
    return (
        <>
            <section className="switchable ">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            <img
                                alt="Image"
                                className="border--round box-shadow-wide"
                                src="img/inner-2.jpg"
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="row mx-0 switchable__text flex-column">
                                <p className="lead">
                                    Email:{" "}
                                    <Link to={`mailto:${ContactInfo.contact_email}`}>
                                        {ContactInfo.contact_email}
                                    </Link>
                                </p>
                                <p className="lead">
                                    Phone:{" "}
                                    <Link to={`tel:${ContactInfo.contact_phone}`}>
                                        {ContactInfo.contact_phone}
                                    </Link>
                                </p>
                                <p className="lead">
                                    Give us a call or drop by anytime, we endeavour to answer all
                                    enquiries within 24 hours on business days.
                                </p>
                                    {error && <div className="text-danger">{error}</div>}

                                {/* Contact Form */}
                                <form
                                    className="form-email row"
                                    onSubmit={handleSubmit}
                                    noValidate="true"
                                >

                                    <div className="col-md-6">
                                        <label>Your Name:</label>
                                        <input
                                            type="text"
                                            name="fullname"
                                            value={formData.fullname}
                                            onChange={handleChange}
                                            className="validate-required"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Email Address:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="validate-required validate-email"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Phone Number:</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="validate-required"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Subject:</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="validate-required"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <label>Message:</label>
                                        <textarea
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="validate-required"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <div className="recaptcha">
                                            <div style={{width: 304, height: 78}}>
                                                <div>
                                                    <iframe
                                                        title="reCAPTCHA"
                                                        width={304}
                                                        height={78}
                                                        role="presentation"
                                                        name="a-f21yb86h20ve"
                                                        frameBorder={0}
                                                        scrolling="no"
                                                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LewhCIUAAAAACSwFvBDhgtTbw6EnW6e9dip8o2u&co=ZmlsZTo.&hl=en&v=zIriijn3uj5Vpknvt_LnfNbF&theme=light&size=normal&cb=dzz5gebb847e"
                                                    />
                                                </div>
                                            </div>
                                            <iframe style={{display: "none"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-lg-4">
                                        <button
                                            type="submit"
                                            className="btn btn--primary type--uppercase"
                                        >
                                            Send Enquiry
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="unpad ">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2939.938715304155!2d73.24388473491226!3d34.198252891772185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1736176443188!5m2!1sen!2s"
                    width="100%"
                    height={450}
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </>
    );
};

export default Contact;
