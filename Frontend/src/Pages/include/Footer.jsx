
function Footer() {

    return (
        <>
            <footer className="text-center-xs space--xs bg--dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <ul className="list-inline">
                                <li>
                                    <a href="#">
                                        <span className="h6 type--uppercase">About</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="h6 type--uppercase">Careers</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="h6 type--uppercase">Support</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-5 text-right text-center-xs">
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
                    <div className="row">
                        <div className="col-md-7">
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
                        <div className="col-md-5 text-right text-center-xs">
                            <a className="type--fine-print" href="#">
                                support@stack.io
                            </a>
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