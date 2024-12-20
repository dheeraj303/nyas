import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import serviceList from "../scripts/serviceList";

const ServiceAreaOne = () => {
  return (
    <>
    {/* <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"></link> */}
      {/*=================== service area start ===================*/}
      <div className='service-area bg-relative pd-top-100'>
        <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>COPREHENSIVE DIGITAL SOLUTIONS</h6>
            <h2 className='title'>
              Your Partner In <span>Digital</span> Success
            </h2>
          </div>
          {/* <div className='row'>
            {serviceList.slice(0, 3).map((data, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src={data.img} alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to='/service-details'>{data.title}</Link>
                    </h5>
                    <p>{data.des}</p>
                    <Link className='btn btn-border-base' to='/service-details'>
                      Read More <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <section id="features" className="features section">
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="features-item" style={{ height: 80 }}>
          <Link to="/web-development">

            <i className="bi bi-laptop" style={{ color: "#ffbb2c" }} />
            </Link>
            <h3>
              {/* <a href="" className="stretched-link"> */}
                Custom Website Design &amp; Development
              {/* </a> */}
            </h3>
          </div>
        </div>
        {/* End Feature Item */}
        <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="features-item" style={{ height: 80 }}>
          <Link to="/mvp-development">

            <i className="bi bi-box" style={{ color: "#5578ff" }} />
            </Link>
            <h3>
              {/* <a href="" className="stretched-link"> */}
                MVP Development &amp; Testing
              {/* </a> */}
            </h3>
          </div>
        </div>
        {/* End Feature Item */}
        <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="features-item" style={{ height: 80 }}>
          <Link to="/ui-ux-design">

            <i className="bi bi-palette" style={{ color: "#e80368" }} />
            </Link>
            <h3>
              {/* <a href="" className="stretched-link"> */}
                UI/UX Design &amp; Prototyping
              {/* </a> */}
            </h3>
          </div>
        </div>
        {/* End Feature Item */}
        <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="features-item" style={{ height: 80 }}>
          <Link to="/web-development">

            <i className="bi bi-tools" style={{ color: "#e361ff" }} />
            </Link>
            <h3>
              {/* <a href="" className="stretched-link"> */}
                Ongoing Software &amp; Website Maintenance
              {/* </a> */}
            </h3>
          </div>
        </div>
        {/* End Feature Item */}
        <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          <div className="features-item" style={{ height: 80 }}>
          <Link to="/blockchain">

            <i className="bi bi-diagram-3" style={{ color: "#47aeff" }} />
            </Link>
            <h3>
              {/* <a href="" className="stretched-link"> */}
                Blockchain Solutions &amp; Decentralized Applications
              {/* </a> */}
            </h3>
          </div>
        </div>
        {/* End Feature Item */}
        <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <div className="features-item" style={{ height: 80 }}>
          <Link to="/mobile-app">

            <i className="bi bi-phone" style={{ color: "#ffa76e" }} />
            </Link>
            <h3>
              <a href="" className="stretched-link">
                Digital App Development Services
              </a>
            </h3>
          </div>
        </div>
        {/* End Feature Item */}
        <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={700}
        >
          <div className="features-item" style={{ height: 80 }}>
          <Link to="/legal-services">

            <i className="bi bi-balance-scale" style={{ color: "#11dbcf" }} />
            </Link>
            <h3>
              <a href="" className="stretched-link">
                Legal Services
              </a>
            </h3>
          </div>
        </div>
        {/* End Feature Item */}
        {/* <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={800}
        >
          <div className="features-item" style={{ height: 80 }}>
            <i className="bi bi-graph-up" style={{ color: "#4233ff" }} />
            <h3>
              <a href="" className="stretched-link">
                Operations Consultancy Services
              </a>
            </h3>
          </div>
        </div> */}
        {/* End Feature Item */}
        {/* <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={900}
        >
          <div className="features-item" style={{ height: 80 }}>
            <i className="bi bi-person-circle" style={{ color: "#b2904f" }} />
            <h3>
              <a href="" className="stretched-link">
                Virtual Assistant &amp; Administrative Support
              </a>
            </h3>
          </div>
        </div> */}
        {/* End Feature Item */}
        {/* <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={1000}
        >
          <div className="features-item" style={{ height: 80 }}>
            <i className="bi bi-diagram-2" style={{ color: "#3aaf4e" }} />
            <h3>
              <a href="" className="stretched-link">
                Project Management
              </a>
            </h3>
          </div>
        </div> */}
        {/* End Feature Item */}
        {/* <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={1100}
        >
          <div className="features-item" style={{ height: 80 }}>
            <i className="bi bi-bullseye" style={{ color: "#ff5828" }} />
            <h3>
              <a href="" className="stretched-link">
                Digital Marketing
              </a>
            </h3>
          </div>
        </div> */}
        {/* End Feature Item */}
        {/* <div
          className="col-lg-3 col-md-4"
          data-aos="fade-up"
          data-aos-delay={1200}
        >
          <div className="features-item" style={{ height: 80 }}>
            <i
              className="bi bi-arrow-left-right"
              style={{ color: "#29cc61" }}
            />
            <h3>
              <a href="" className="stretched-link">
                Cross Platform
              </a>
            </h3>
          </div>
        </div> */}
        {/* End Feature Item */}
      </div>
    </div>
  </section>
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaOne;
