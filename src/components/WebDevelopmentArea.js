import React from "react";

const WebDevelopmentArea = () => {
  return (
    <>
    
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n      .breadcrumb-section {\n        background-color: #f8f9fa;\n        padding: 60px 0;\n        text-align: center; /* Center-aligns the text */\n      }\n      .promo-title {\n        font-size: 30px;\n        font-weight: bold;\n        color: #212529;\n        margin: 0; /* Ensures no extra margin around the text */\n      }\n    "
      }}
    />
    <section className="breadcrumb-section">
      <div className="container">
        <h1 className="promo-title">Custom Website Design &amp; Development</h1>
      </div>
    </section>
    {/*- Services --*/}
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n      #services p {\n        text-align: justify;\n      }\n    "
      }}
    />
    <section id="services">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <div className="row align-items-center">
              {/* Image Section */}
              <div className="col-md-4 text-center">
                <img
                  src="assets/webdesign/images/custom.png"
                  alt="Custom Website"
                  className="img-fluid"
                  style={{
                    maxWidth: 350,
                    height: 450,
                    borderRadius: 10,
                    marginTop: "-20px"
                  }}
                />{" "}
                {/* Image slightly moved upwards */}
              </div>
              {/* Text Content Section */}
              <div className="col-md-8">
                <p>
                  In today’s digital-first world, a custom website acts as the
                  centerpiece of a business’s online presence. Nyas’s custom
                  website development helps companies to stand out, communicate
                  their brand story effectively, and convert visitors into loyal
                  customers.
                </p>
                <p>
                  <strong>Service Overview:</strong> Custom website design and
                  development involve creating a website specifically tailored to
                  a business’s unique goals, audience, and brand. Unlike
                  template-based sites, a custom-built website offers a more
                  flexible, scalable, and targeted digital experience that aligns
                  perfectly with the brand’s identity and customer expectations.
                </p>
                <p>
                  <strong>Why businesses need it:</strong> Businesses increasingly
                  recognize that a unique and engaging website is vital to
                  building credibility, engaging audiences, and driving
                  conversions. A generic, one-size-fits-all website may lack the
                  specialized functionalities, flexibility, and distinctiveness
                  required to capture and retain attention in competitive markets.
                  Custom design enables businesses to optimize their digital
                  presence for branding, user experience, and functionality,
                  ensuring the website supports and enhances business goals.
                </p>
                <p>
                  <strong>How Nyas Delivers Excellence:</strong> At Nyas, we focus
                  on creating websites that are not only visually appealing but
                  also built with user experience, speed, and scalability in mind.
                  Using the latest development tools, responsive design
                  techniques, and SEO best practices, Nyas crafts websites that
                  are fast, secure, and optimized for search engines. Our team
                  works closely with each client, from initial concept to final
                  launch, to ensure the website reflects the business’s essence
                  and is built to achieve measurable results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*- About Section ----*/}
    <section id="about">
      <div className="container">
        <h3 className="title text-center">Process Involved</h3>
        <div className="row">
          <div className="col-md-6 about">
            <p className="about-title">
              Comprehensive Custom Website Solutions: From Strategy to Ongoing
              Support
            </p>
            <ul>
              <li>
                Initial Consultation and Discovery: Understanding client goals,
                competitive landscape, and target audience to shape a website
                strategy.{" "}
              </li>
              <li>
                {" "}
                User-Centric Design: Creating a unique design layout that enhances
                the brand’s visual identity and aligns with user needs.
              </li>
              <li>
                {" "}
                Development &amp; Coding: Building a responsive and optimized site
                with clean, scalable code that ensures high performance.
              </li>
              <li>
                Quality Assurance &amp; Testing: Testing for compatibility,
                functionality, and usability across devices and platforms.{" "}
              </li>
              <li>
                {" "}
                Launch &amp; Ongoing Support: Providing continuous updates,
                security patches, and enhancements to keep the site in top
                condition.{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src="assets/webdesign/images/webspng.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n      #services p {\n        text-align: justify;\n        margin: 20px 0px;\n      }\n    "
      }}
    />
    <section id="services">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <p>
              In today’s digital-first world, a custom website acts as the
              centerpiece of a business’s online presence. Nyas’s custom website
              development helps companies to stand out, communicate their brand
              story effectively, and convert visitors into loyal customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
  

  

  
  );
};

export default WebDevelopmentArea;
