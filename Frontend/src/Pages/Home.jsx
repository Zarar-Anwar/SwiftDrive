import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

function Home() {
  return (
      <>
        <Helmet>
          <title>SwiftDrive | Simplify Your Logistics</title>
        </Helmet>

        {/* Hero Section */}
        <section
            className="cover height-100 text-center imagebg parallax"
            data-overlay={1}
        >
          <div
              className="background-image-holder"
              style={{
                backgroundImage: 'url("img/landing-13.jpg")',
                transform: "translate3d(0px, 0px, 0px)",
                opacity: 1,
              }}
          >
            <img alt="background" src="img/landing-13.jpg"/>
          </div>
          <div className="container pos-vertical-center">
            <div className="row">
              <div className="col-md-12">
                <h1>Welcome to SwiftDrive</h1>
                <p className="lead">
                  Revolutionizing transportation with efficiency, reliability, and ease.
                  Your logistics, redefined.
                </p>
                <Link
                    className="btn btn--primary type--uppercase"
                    to="/registration"
                >
                  <span className="btn__text">Get Started</span>
                </Link>
                <span className="block type--fine-print">
                or <a href="/themes">learn more about our features</a>
              </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <span className="h1">Drive Smarter with SwiftDrive</span>
                <p className="lead">
                  Whether you're managing fleet operations or booking a ride,
                  SwiftDrive delivers a seamless experience with cutting-edge technology
                  designed to save you time and money.
                </p>
                <Link className="btn btn--primary type--uppercase" to="/themes">
                  <span className="btn__text">Discover Features</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="height-80 parallax imagebg">
          <div
              className="background-image-holder"
              style={{
                backgroundImage: 'url("img/landing-14.jpg")',
                transform: "translate3d(0px, -225.888px, 0px)",
                opacity: 1,
              }}
          >
            <img alt="background" src="img/landing-14.jpg"/>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="text-center bg--dark ">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8">
                <h2>Why Choose SwiftDrive?</h2>
                <p className="lead">
                  From AI-driven route optimization to real-time tracking,
                  SwiftDrive offers the tools you need to stay ahead in a fast-paced world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              {[
                {
                  icon: "icon-Hand-Touch",
                  title: "Interactive Features",
                  description:
                      "SwiftDrive comes equipped with intuitive, interactive features like real-time notifications, and an easy-to-use dashboard. Whether you're tracking deliveries or managing your fleet, every interaction feels seamless and engaging.",
                },
                {
                  icon: "icon-Hour",
                  title: "Save Time, Get More Done",
                  description:
                      "SwiftDrive’s powerful tools and features drastically reduce the time it takes to build and scale transportation operations. Our optimized workflows ensure faster deployment, so you can focus on delivering results without delay",
                },
                {
                  icon: "icon-Life-Safer",
                  title: "Reliable Customer Support",
                  description:
                      "We offer dedicated, friendly support to all our SwiftDrive users. With 24/7 access to our support team and an intuitive help center, you’ll always feel confident and supported, no matter the challenge.",
                },
              ].map((feature, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="feature feature-4 boxed boxed--lg boxed--border">
                      <i className={`icon ${feature.icon}`}/>
                      <h4>{feature.title}</h4>
                      <hr/>
                      <p>{feature.description}</p>

                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        {/*<section className="text-center bg--secondary">*/}
        {/*  <div className="container">*/}
        {/*    <div className="row">*/}
        {/*      <div className="col-lg-8 col-md-10">*/}
        {/*        <h3>What Our Users Say</h3>*/}
        {/*        <div className="slider" data-paging="true" data-children={3}>*/}
        {/*          <ul className="slides">*/}
        {/*            <li className="slide">*/}
        {/*              <div className="testimonial">*/}
        {/*                <img*/}
        {/*                    alt="User Feedback"*/}
        {/*                    src="img/user1.jpg"*/}
        {/*                    className="image--sm"*/}
        {/*                />*/}
        {/*                <p>*/}
        {/*                  “SwiftDrive transformed the way we manage logistics.*/}
        {/*                  It's efficient, reliable, and easy to use.”*/}
        {/*                </p>*/}
        {/*                <h5>Jane Doe</h5>*/}
        {/*                <span>Business Owner</span>*/}
        {/*              </div>*/}
        {/*            </li>*/}
        {/*            <li className="slide">*/}
        {/*              <div className="testimonial">*/}
        {/*                <img*/}
        {/*                    alt="User Feedback"*/}
        {/*                    src="img/user2.jpg"*/}
        {/*                    className="image--sm"*/}
        {/*                />*/}
        {/*                <p>*/}
        {/*                  “Their real-time tracking feature is a game changer.*/}
        {/*                  Now I always know where my deliveries are.”*/}
        {/*                </p>*/}
        {/*                <h5>John Smith</h5>*/}
        {/*                <span>Fleet Manager</span>*/}
        {/*              </div>*/}
        {/*            </li>*/}
        {/*          </ul>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Newsletter Section */}
        <section className="text-center">
          <div className="container">
            <div className="row">
              <h2>Stay Updated with SwiftDrive</h2>
            </div>
            <form className="row justify-content-center form--active">
              <div className="col-lg-6 col-md-8">
                <input
                    type="email"
                    placeholder="Enter your email for updates"
                    required
                />
              </div>
              <div className="col-lg-2 col-md-4">
                <button type="submit" className="btn btn--primary">
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
  );
}

export default Home;
