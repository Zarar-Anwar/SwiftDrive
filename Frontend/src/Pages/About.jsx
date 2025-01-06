const About = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="text-center height-50">
                <div className="container pos-vertical-center">
                    <div className="row">
                        <div className="col-md-8 col-lg-6">
                            <h1>Welcome to SwiftDrive</h1>
                            <p className="lead">
                                A platform where drivers can create their own websites effortlessly by adding data and selecting a template.
                            </p>
                        </div>
                    </div>
                    {/*end of row*/}
                </div>
                {/*end of container*/}
            </section>

            {/* Journey Section */}
            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="process-1">
                                <div className="process__item">
                                    <h4>Our Vision — Empowering Drivers</h4>
                                    <img
                                        alt="Empowering Drivers"
                                        src="img/driver.png"
                                        className="border--round"
                                    />
                                    <p>
                                        We aim to provide drivers with an easy-to-use platform where they can showcase their services, connect with customers, and grow their businesses.
                                    </p>
                                </div>
                                <div className="process__item">
                                    <h4>Custom Templates for Every Need</h4>
                                    <img
                                        alt="Custom Templates"
                                        src="img/layout.png"
                                        className="border--round"
                                    />
                                    <p>
                                        Choose from a variety of templates designed specifically for drivers. Whether you specialize in deliveries, ridesharing, or logistics, we've got you covered.
                                    </p>
                                </div>
                                <div className="process__item">
                                    <h4>Live Preview & Instant Updates</h4>
                                    <img
                                        alt="Live Preview"
                                        src="img/update.png"
                                        className="border--round"
                                    />
                                    <p>
                                        Get a live preview of your website as you customize it. Update your site in real-time to ensure it looks exactly how you want.
                                    </p>
                                </div>
                                <div className="process__item">
                                    <h4>Join Our Community</h4>
                                    <img
                                        alt="Community"
                                        src="img/communities.png"
                                        className="border--round"
                                    />
                                    <p>
                                        Become part of a growing community of drivers showcasing their services and expanding their reach through DriverWeb.
                                    </p>
                                </div>
                            </div>
                            {/*end process*/}
                        </div>
                    </div>
                    {/*end of row*/}
                </div>
                {/*end of container*/}
            </section>

            {/* Call-to-Action Section */}
            <section className="text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="cta">
                                <h2>Ready to Build Your Website?</h2>
                                <p className="lead">
                                    Sign up today and start building a website that reflects your unique services. Showcase your routes, schedules, and expertise to the world.
                                </p>
                                <a
                                    className="btn btn--primary type--uppercase"
                                    href="/signup"
                                >
                                    <span className="btn__text">Get Started Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*end of row*/}
                </div>
                {/*end of container*/}
            </section>
        </>
    );
};

export default About;
