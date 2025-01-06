import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import api from "../Utils/Axios";

const Registration = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    // State to handle loading and errors
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        if (password1 !== password2) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const response = await api.post("/auth/registration/", {
                username: username,
                email: email,
                password1: password1,
                password2: password2,
            });
            console.log(response)
            toast.success("Registered SuccessFully")
            navigate("/login")
            setSuccess(true);

        } catch (err) {
            console.log(err);
            if (err.response && err.response.data) {
                const errorData = err.response.data; // Get the error data

                // Check if the backend response has errors
                if (errorData && typeof errorData === 'object') {
                    Object.keys(errorData).forEach((field) => {
                        // If there are specific errors for each field (like username or email), display them
                        const errorMessages = errorData[field];
                        if (Array.isArray(errorMessages)) {
                            errorMessages.forEach((message) => {
                                setError(`* ${message}`);// Show each error message
                            });
                        }
                    });
                }
            } else {
                // Handle the case where there's no response data (e.g., network issue)
                setError("An error occurred. Please try again later.");
                toast.error("An error occurred. Please try again later.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="imageblock switchable feature-large height-100">
            <div className="imageblock__content col-lg-6 col-md-4 pos-right">
                <div
                    className="background-image-holder"
                    style={{background: 'url("img/inner-6.jpg")', opacity: 1}}
                >
                    <img alt="image" src="/img/art-5.png"/>
                </div>
            </div>
            <div className="container pos-vertical-center">
                <div className="row">
                    <div className="col-lg-5 col-md-7">
                        <h2>Create a SwiftDrive account</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12">

                                    {error && <div className="text-danger mb-2">{error}</div>}
                                    {success && <div className="text-success">Account created successfully!</div>}
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password1}
                                        onChange={(e) => setPassword1(e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        value={password2}
                                        onChange={(e) => setPassword2(e.target.value)}
                                    />
                                </div>
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn--primary type--uppercase"
                                        disabled={loading}
                                    >
                                        {loading ? "Creating Account..." : "Create Account"}
                                    </button>
                                </div>
                            </div>
                            {/* End row */}
                        </form>


                        <div className="col-12">
              <span className="type--fine-print">
                Already have an account
              </span> <br/>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
                {/* End of row */}
            </div>
            {/* End of container */}
        </section>
    );
};

export default Registration;
