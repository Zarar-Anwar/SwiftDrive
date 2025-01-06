const Profile=()=>{
    return(
        <>
            <section className="bg--secondary space--sm">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="boxed boxed--lg boxed--border">
                                <div className="text-block text-center">
                                    <img
                                        alt="avatar"
                                        src="img/avatar-round-3.png"
                                        className="image--md"
                                    />
                                    <span className="h5">Lucas Banks</span>
                                    <span>Interface Designer, Stack Systems</span>
                                    <span className="label">Contributor</span>
                                </div>
                                <div className="text-block clearfix text-center">
                                    <ul className="row row--list">
                                        <li className="col-md-4">
                                            <span className="type--fine-print block">Location:</span>
                                            <span>San Francisco&nbsp;</span>
                                            <img alt="Image" className="flag" src="img/flag-1.png"/>
                                        </li>
                                        <li className="col-md-4">
                                            <span className="type--fine-print block">Member Since:</span>
                                            <span>June 2016</span>
                                        </li>
                                        <li className="col-md-4">
                                            <span className="type--fine-print block">Contact:</span>
                                            <a href="#">lucas_b@domain.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="boxed boxed--border">
                                <ul className="row row--list clearfix text-center">
                                    <li className="col-md-3 col-6">
                                        <span className="h6 type--uppercase type--fade">Likes</span>
                                        <span className="h3">220</span>
                                    </li>
                                    <li className="col-md-3 col-6">
                                        <span className="h6 type--uppercase type--fade">Articles</span>
                                        <span className="h3">14</span>
                                    </li>
                                    <li className="col-md-3 col-6">
                                        <span className="h6 type--uppercase type--fade">Comments</span>
                                        <span className="h3">2,129</span>
                                    </li>
                                    <li className="col-md-3 col-6">
                                        <span className="h6 type--uppercase type--fade">Following</span>
                                        <span className="h3">119</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="boxed boxed--border">
                                <h4>Connections</h4>
                                <ul className="clearfix row row--list text-center">
                                    <li className="col-md-3 col-6">
                                        <a href="#">
                                            <img
                                                alt="avatar"
                                                src="img/avatar-round-2.png"
                                                className="image--sm"
                                            />
                                            <span className="block">Alice Merriweather</span>
                                        </a>
                                    </li>
                                    <li className="col-md-3 col-6">
                                        <a href="#">
                                            <img
                                                alt="avatar"
                                                src="img/avatar-round-1.png"
                                                className="image--sm"
                                            />
                                            <span className="block">Kelly Burgess</span>
                                        </a>
                                    </li>
                                    <li className="col-md-3 col-6">
                                        <a href="#">
                                            <img
                                                alt="avatar"
                                                src="img/avatar-round-4.png"
                                                className="image--sm"
                                            />
                                            <span className="block">Marc Nguyen</span>
                                        </a>
                                    </li>
                                    <li className="col-md-3 col-6">
                                        <a href="#">
                                            <img
                                                alt="avatar"
                                                src="img/avatar-round-5.png"
                                                className="image--sm"
                                            />
                                            <span className="block">Selena Rouse</span>
                                        </a>
                                    </li>
                                </ul>
                                <a href="#" className="type--fine-print pull-right">
                                    View All
                                </a>
                            </div>
                            <div className="boxed boxed--border">
                                <h4>Recent Activity</h4>
                                <ul>
                                    <li className="clearfix">
                                        <div className="row">
                                            <div className="col-lg-2 col-3 text-center">
                                                <div className="icon-circle">
                                                    <i className="icon icon--lg material-icons">comment</i>
                                                </div>
                                            </div>
                                            <div className="col-lg-8 col-7">
                                                <span className="type--fine-print">21st July, 2017</span>
                                                <a href="#" className="block color--primary">
                                                    Check out the relaunched Scope
                                                </a>
                                                <p>
                                                    Discourse in writing dealing with a particular point or
                                                    idea.
                                                </p>
                                            </div>
                                        </div>
                                        <hr/>
                                    </li>
                                    <li className="clearfix">
                                        <div className="row">
                                            <div className="col-lg-2 col-3 text-center">
                                                <div className="icon-circle">
                                                    <i className="icon icon--lg material-icons">mode_edit</i>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-7">
                                                <span className="type--fine-print">14th July, 2017</span>
                                                <a href="#" className="block color--primary">
                                                    Tips for web typography
                                                </a>
                                                <p>
                                                    To write beside or "written beside" is a self-contained unit
                                                    of a discourse in writing dealing with a particular point or
                                                    idea.
                                                </p>
                                            </div>
                                        </div>
                                        <hr/>
                                    </li>
                                    <li className="clearfix">
                                        <div className="row">
                                            <div className="col-lg-2 col-3 text-center">
                                                <div className="icon-circle">
                                                    <i className="icon icon--lg material-icons">favorite</i>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-7">
                                                <span className="type--fine-print">12th July, 2017</span>
                                                <a href="#" className="block color--primary">
                                                    Where do you source your stock photography?
                                                </a>
                                            </div>
                                        </div>
                                        <hr/>
                                    </li>
                                    <li className="clearfix">
                                        <div className="row">
                                            <div className="col-lg-2 col-3 text-center">
                                                <div className="icon-circle">
                                                    <i className="icon icon--lg material-icons">comment</i>
                                                </div>
                                            </div>
                                            <div className="col-md-8 col-7">
                                                <span className="type--fine-print">3rd July, 2017</span>
                                                <a href="#" className="block color--primary">
                                                    Share your rapid development workflow
                                                </a>
                                                <p>
                                                    Of a discourse in writing dealing with a particular point or
                                                    idea.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <a href="#" className="type--fine-print pull-right">
                                    View All
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*end of row*/}
                </div>
                {/*end of container*/}
            </section>

        </>
    )
}

export default Profile