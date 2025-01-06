import React from 'react'
import {Link} from "react-router-dom";

function Header() {
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
                                <div className="bar__module">
                                    <Link
                                        className="btn btn--sm type--uppercase"
                                        to="/user-registration"
                                    >
                                        <span className="btn__text">Try Builder</span>
                                    </Link>
                                    <Link
                                        className="btn btn--sm btn--primary type--uppercase"
                                        to="/login"
                                    >
                                        <span className="btn__text">Buy Now</span>
                                    </Link>
                                </div>
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