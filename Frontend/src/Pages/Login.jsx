import React, {useContext, useState} from "react";
import api from "../Utils/Axios";
import {toast} from "react-toastify";
import {Store} from "../Utils/Store";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    // State to hold form values
    const {dispatch} = useContext(Store);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    // State to handle loading and errors
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            // Send API request to backend
            const response = await api.post("/auth/login/", {
                username: username,
                email: email,
                password: password,
            });

            dispatch({type: "UserLoggedIn", payload: response.data});
            navigate("/user-profile")


            // Reset form or redirect after success
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
                                toast.error(`${field}: ${message}`);
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
        <section className="height-100 imagebg text-center" data-overlay={4}>
            <div
                className="background-image-holder"
                style={{background: 'url("img/inner-6.jpg")', opacity: 1}}
            >
                <img alt="background" src="img/inner-6.jpg"/>
            </div>
            <div className="container pos-vertical-center">
                <div className="row">
                    <div className="col-md-7 col-lg-5">
                        <h2>Login to continue</h2>
                        <p className="lead">
                            Welcome back, sign in with your existing SwiftDrive account credentials
                        </p>
                        <form onSubmit={handleSubmit}>
                            {error && <div className="text-warning">{error}</div>}
                            <div className="row">
                                <div className="col-md-12">
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <button
                                        className="btn btn--primary type--uppercase"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        {loading ? "Logging in..." : "Login"}
                                    </button>
                                </div>
                            </div>
                            {/*end of row*/}
                        </form>


                        <span className="type--fine-print block">
              Don't have an account yet :
              <Link to="/registration" className="text-primary"> Create account</Link>
            </span>
                        <span className="type--fine-print block">
              Forgot your username or password
              <Link to="/" className="text-primary"> Recover account</Link>
            </span>
                    </div>
                </div>
                {/*end of row*/}
            </div>
            {/*end of container*/}
        </section>
    );
};

export default Login;
