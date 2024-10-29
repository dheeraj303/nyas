import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SolutionOne = () => {
  return (
    <>
      {/* solution area start */}
      <div className="solution-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div
            className="p-4 p-xl-5"
            style={{ backgroundImage: 'url("./assets/img/home-7/14.png")' }}
          >
            <div className="row">
              <div
                className="col-lg-6 align-self-center wow animated fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <div className="section-title style-white mb-0">
                  <h6 className="bg-none color-base mb-3">Our Solution</h6>
                  <h2 className="title">
                  We Are Experts in All Technology Solutions
                  </h2>
                  <p className="content mb-4">
                  Technology Consulting offers specialized guidance to organizations, enhancing digital strategies and optimizing IT systems for growth. Consultants assess infrastructure, identify tech improvements, and implement solutions for efficiency, innovation, and competitive advantage.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="single-list-inner style-check style-heading style-check mb-3">
                        <li className="text-white">
                        
                          <FaCheckCircle /> Digital Strategy
                        </li>
                        <li className="text-white">
                          <FaCheckCircle /> System Optimization

                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="single-list-inner style-check style-heading style-check mb-3">
                        <li className="text-white">
                          <FaCheckCircle /> Tech Improvements

                        </li>
                        <li className="text-white">
                          <FaCheckCircle /> Competitive Advantage

                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 solution-area-style">
                <div className="section-title mb-0 bg-white p-xl-5 p-4 box-shadow">
                  <h2 className="title">Get in Touch</h2>
                  <form className="mt-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Phone" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="single-input-inner style-border">
                          <input type="text" placeholder="Your Subject" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="single-input-inner style-border">
                          <textarea placeholder="Message" defaultValue={''} />
                        </div>
                      </div>
                      <div className="col-12">
                        <Link
                          className="btn btn-black mt-0 w-100 border-radius-5"
                          to="#"
                        >
                          Submit now
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* solution area end */}
    </>
  );
};

export default SolutionOne;
