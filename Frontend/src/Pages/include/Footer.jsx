
function Footer() {

    return (
        <>
            <footer className="space--sm footer-2 imagebg" data-overlay={4}>
                <div
                    className="background-image-holder"
                    style={{background: 'url("img/hero-1.jpg")', opacity: 1}}
                >
                    <img alt="background" src="img/hero-1.jpg"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 col-6">
                            <h6 className="type--uppercase">Company</h6>
                            <ul className="list--hover">
                                <li>
                                    <a href="#">About Company</a>
                                </li>
                                <li>
                                    <a href="#">Our Team</a>
                                </li>
                                <li>
                                    <a href="#">Locations</a>
                                </li>
                                <li>
                                    <a href="#">History</a>
                                </li>
                                <li>
                                    <a href="#">Work With Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-6">
                            <h6 className="type--uppercase">Developers</h6>
                            <ul className="list--hover">
                                <li>
                                    <a href="#">Developer Center</a>
                                </li>
                                <li>
                                    <a href="#">API Reference</a>
                                </li>
                                <li>
                                    <a href="#">Downloads</a>
                                </li>
                                <li>
                                    <a href="#">Tools</a>
                                </li>
                                <li>
                                    <a href="#">Developer Blog</a>
                                </li>
                                <li>
                                    <a href="#">Developer Forums</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-6">
                            <h6 className="type--uppercase">Support</h6>
                            <ul className="list--hover">
                                <li>
                                    <a href="#">Help Center</a>
                                </li>
                                <li>
                                    <a href="#">Live Chat</a>
                                </li>
                                <li>
                                    <a href="#">Downloads</a>
                                </li>
                                <li>
                                    <a href="#">Press Kit</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 col-6">
                            <h6 className="type--uppercase">Locations</h6>
                            <ul className="list--hover">
                                <li>
                                    <a href="#">Melbourne</a>
                                </li>
                                <li>
                                    <a href="#">London</a>
                                </li>
                                <li>
                                    <a href="#">New York</a>
                                </li>
                                <li>
                                    <a href="#">San Francisco</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*end of row*/}
                    <div className="row">
                        <div className="col-md-6">
        <span className="type--fine-print">
          ©<span className="update-year">2025</span> Stack Inc.
        </span>
                            <a className="type--fine-print" href="#">
                                Privacy Policy
                            </a>
                            <a className="type--fine-print" href="#">
                                Legal
                            </a>
                        </div>
                        <div className="col-md-6 text-right text-left-xs">
                            <ul className="social-list list-inline list--hover">
                                <li>
                                    <a href="#">
                                        <i className="socicon socicon-google icon icon--xs"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="socicon socicon-twitter icon icon--xs"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="socicon socicon-facebook icon icon--xs"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="socicon socicon-instagram icon icon--xs"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*end of row*/}
                </div>
                {/*end of container*/}
            </footer>
        </>
    )
}

export default Footer