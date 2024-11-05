import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceAreaGroupThree = () => {
  return (
    <>
      {/* service area start */}
      <div className="service-area bg-relative pd-top-120">
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title text-center">
                {/* <h6 className="color-base bg-none mb-3">Our Services</h6> */}
                <h2 className="title">
                  We Provide the best Technology Services
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-4">
                  <img src="assets/img/icon/18.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Mobile Development</h5>
                  <p className="content mb-3">
                  Mobile development involves creating applications for mobile devices using languages like Swift, Kotlin, and frameworks like Flutter or React Native. Focuses on performance, user experience, and cross-platform functionality.

                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/16.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Cross Platform App Development
                  </h5>
                  <p className="content mb-3">
                  Cross-platform app development allows building apps for multiple platforms from a single codebase, saving time and resources while ensuring consistent user experiences across iOS and Android.

                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/17.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Virtual Assistant</h5>
                  <p className="content mb-3">
                  Hiring a virtual assistant from NYAS saves time and money while boosting productivity by delegating core and non-core tasks to experienced professionals.

                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/20.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Project Management</h5>
                  <p className="content mb-3">
                  Our PMO leverages advanced technology to ensure innovative, continuous development and comprehensive governance for the successful delivery of critical projects.

                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-4">
                  <img src="assets/img/icon/18.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Meta Campaigning & Creative Design
                  </h5>
                  <p className="content mb-3">
                  Meta campaigning blends data-driven strategies with creative design, crafting engaging, targeted campaigns that enhance brand visibility, drive user interaction, and foster meaningful connections across platforms.

                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <img src="assets/img/icon/16.svg" alt="img" />
                </div>
                <div className="details">
                  <h5 className="mb-3">Big Data Analytics</h5>
                  <p className="content mb-3">
                    Create ipsum dolor sit consec tetur sed diam in the aliquam
                  </p>
                  {/* <Link className="read-more-text" to="/service-details">
                    Read More <FaArrowRight />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceAreaGroupThree;
