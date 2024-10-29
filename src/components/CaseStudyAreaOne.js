import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CaseStudyAreaOne = () => {
  return (
    <>
      {/*================== case-study area start ==================*/}
      <div className="case-study-area bg-relative pd-top-110">
        <img
          className="animate-img-1 top_image_bounce"
          src="assets/img/banner/2.png"
          alt="img"
        />
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">GALLERY HERE</h6>
            <h2 className="title">
            Why  <span>Nyas </span> Consultants
            </h2>
          </div>
          <div className="row">
           <div className="col-lg-12 col-md-12 mx-4 text-center">
               <p>
               At our company, we provide innovative solutions that bring creative ideas to challenge conventional norms, ensuring your business stands out in a competitive landscape. Our results-driven approach focuses on delivering real, measurable outcomes that enhance your business performance and foster overall growth. You can benefit from affordable expertise through our high-quality consultancy services offered at competitive rates, making professional support accessible without compromising quality. Our streamlined process guarantees quick onboarding and tailored expert assistance, allowing you to concentrate on your core business while we manage the technical details. With diverse digital solutions ranging from software development to mobile and full stack development, our custom offerings are designed to drive digital transformation and meet your specific needs.
               </p>
           </div>
            
          </div>
        </div>
      </div>
      {/* ================== case-study area end ==================*/}
    </>
  );
};

export default CaseStudyAreaOne;
