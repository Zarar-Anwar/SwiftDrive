import React, {useContext} from 'react'
import {Link, useNavigate} from "react-router-dom";
import {Store} from "../../Utils/Store";
import api from "../../Utils/Axios";
import {toast} from "react-toastify";

function Header() {
    const {state,dispatch} = useContext(Store)
    const navigate = useNavigate()
    const {UserInfo} = state
    const handleLogout = async () => {
    try {
      const headers = {
        'X-CSRFTOKEN': UserInfo.key,  // CSRF token here
        'Content-Type': 'application/json',
      };

      await api.post("/auth/logout/", {}, { headers });

      dispatch({ type: "ClearUserInfo" });
      localStorage.removeItem("UserInfo");

      navigate("/login");

      toast.success("Logged out successfully!");
    } catch (err) {
      // Handling any error that occurs during the logout request
      console.error("Error during logout:", err.response ? err.response.data : err);

      // Showing an error notification
      toast.error("Error logging out. Please try again.");
    }
  };
    return (
        <>
            <div className="nav-container ">
                <nav id="menu1" className="bar bar--sm bar-1 hidden-xs ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-md-2 hidden-xs">
                                <div className="bar__module">
                                    <Link to="/">
                                        <img
                                            className="logo logo-dark"
                                            alt="logo"
                                            src="img/logo-dark.png"
                                        />
                                        <img
                                            className="logo logo-light"
                                            alt="logo"
                                            src="img/logo-light.png"
                                        />
                                    </Link>
                                </div>
                                {/*end module*/}
                            </div>
                            <div className="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
                                <div className="bar__module">
                                    <ul className="menu-horizontal text-left">
                                        <li className="">
                                            <Link to="/">
                                                <span className="">Home</span>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="/themes">
                                                <span className="">Themes</span>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="/about-us">
                                                <span className="">About</span>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="/contact-us">
                                                <span className="">Contact</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/*end module*/}
                                {UserInfo ?
                                    <div className="bar__module">
                                          <Link
                                            className="btn btn--sm btn-success type--uppercase"
                                            to="/user-profile"
                                        >
                                            <span className="btn__text text-white">Profile</span>
                                        </Link>
                                        <Link
                                             onClick={handleLogout}
                                            className="btn btn--sm btn-warning type--uppercase"
                                            to="#"
                                        >
                                            <span className="btn__text">Log out</span>
                                        </Link>

                                    </div> : <div className="bar__module">
                                        <Link
                                            className="btn btn--sm type--uppercase"
                                            to="/registration"
                                        >
                                            <span className="btn__text">Try Builder</span>
                                        </Link>
                                        <Link
                                            className="btn btn--sm btn--primary type--uppercase"
                                            to="/login"
                                        >
                                            <span className="btn__text">Login</span>
                                        </Link>
                                    </div>
                                }
                                {/*end module*/}
                            </div>
                        </div>
                        {/*end of row*/}
                    </div>
                    {/*end of container*/}
                </nav>

            </div>
        </>
    )
}

export default Header