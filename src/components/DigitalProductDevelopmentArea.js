import React from "react";

const DigitalProductDevelopmentArea = () => {
  return (
    <>
    {/* Fonts */}
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
    {/* Vendor CSS Files */}
    {/* <link href="assets/assetscross/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" /> */}
    <link
      href="assets/assetscross/vendor/bootstrap-icons/bootstrap-icons.css"
      rel="stylesheet"
    />
    {/* <link href="assets/assetscross/vendor/aos/aos.css" rel="stylesheet" /> */}
    <link href="assets/assetscross/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
    <link href="assets/assetscross/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
    {/* Main CSS File */}
    <link href="assets/assetscross/css/main.css" rel="stylesheet" />
    {/* =======================================================
    * Template Name: QuickStart
    * Template URL: https://bootstrapmade.com/quickstart-bootstrap-startup-website-template/
    * Updated: Aug 07 2024 with Bootstrap v5.3.3
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== */}
    
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section">
        <div className="hero-bg">
          <img src="assets/assetscross/img/hero-bg-light.webp" alt="" />
        </div>
        <div className="container text-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 data-aos="fade-up">
              Digital Product <span>Development</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay={100}>
              Nyas Consultants delivers end-to-end digital products, aligning
              innovation with excellence.
              <br />
            </p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
              <a href="#about" className="btn-get-started">
                Get Started
              </a>
              {/* <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a> */}
            </div>
            <img
              src="assets/assetscross/img/digialproduct.png"
              className="img-fluid hero-img"
              alt=""
              data-aos="zoom-out"
              data-aos-delay={300}
            />
          </div>
        </div>
      </section>
      {/* /Hero Section */}
      {/* Featured Services Section */}
      <section
        id="featured-services"
        className="featured-services section light-background"
      >
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-xl-4 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-arrow-right-circle-fill" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      End-to-End
                    </a>
                  </h4>
                  <p className="description">
                    Full-cycle development, from concept to final deployment.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-xl-4 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-layers-fill" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Technology Stack
                    </a>
                  </h4>
                  <p className="description">
                    Leveraging ASP .NET, WCF, WPF, .NET Core, and Java.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div
              className="col-xl-4 col-lg-6"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="service-item d-flex">
                <div className="icon flex-shrink-0">
                  <i className="bi bi-lightbulb-fill" />
                </div>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Innovative Solutions
                    </a>
                  </h4>
                  <p className="description">
                    Bringing your ideas to life with advanced technologies.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
      {/* /Featured Services Section */}
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <p className="who-we-are">Cutting-edge digital solutions...</p>
              <h4>Empowering Digital Innovation for Modern Businesses</h4>
              <p className="fst-italic">
                In the ever-evolving digital landscape, the ability to rapidly
                develop and deploy products is crucial for staying ahead. At Nyas
                Consultants, we specialize in delivering end-to-end digital
                product development services, transforming your innovative
                concepts into impactful solutions. From ideation to deployment, we
                utilize advanced technologies like ASP .NET, WCF, WPF, .NET Core,
                and Java to build robust, scalable, and high-performance products.
                Our approach ensures that every digital product aligns with your
                business objectives, meets market demands, and delivers
                exceptional user experiences.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Comprehensive development services from idea to market-ready
                    product.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Leveraging the latest technologies for performance and
                    scalability.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Tailored solutions ensuring alignment with business goals and
                    needs.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check-circle" />{" "}
                  <span>
                    Seamless deployment strategies for efficient market
                    integration.
                  </span>
                </li>
              </ul>
              {/* <a href="#" class="read-more"><span>Read More</span><i class="bi bi-arrow-right"></i></a> */}
            </div>
            <div
              className="col-lg-6 about-images"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="row gy-4">
                <div className="col-lg-6">
                  <img src="assets/assetscross/img/digi3.png" className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="row gy-4">
                    <div className="col-lg-12">
                      <img
                        src="assets/assetscross/img/net-1.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-12">
                      <img
                        src="assets/assetscross/img/net-2.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Features Details Section */}
      {/* Services Section */}
      <section id="services" className="services section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            End-to-end digital product development, from ideation to deployment.
          </p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="service-item item-cyan position-relative">
                <i className="bi bi-lightbulb-fill icon" /> {/* Ideation Icon */}
                <div>
                  <h3>Ideation &amp; Concept</h3>
                  <p>
                    Transforming innovative ideas into actionable digital
                    solutions, ensuring alignment with market demands and business
                    goals.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="service-item item-orange position-relative">
                <i className="bi bi-code-slash icon" /> {/* Development Icon */}
                <div>
                  <h3>Software Development</h3>
                  <p>
                    Building robust, scalable, and high-performance applications
                    using ASP .NET, WCF, WPF, .NET Core, and Java technologies.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="service-item item-teal position-relative">
                <i className="bi bi-braces icon" />{" "}
                {/* System Architecture Icon */}
                <div>
                  <h3>System Architecture</h3>
                  <p>
                    Designing scalable and flexible system architectures to ensure
                    optimal performance, security, and user experience.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
              <div className="service-item item-red position-relative">
                <i className="bi bi-patch-check icon" />{" "}
                {/* Quality Assurance Icon */}
                <div>
                  <h3>Quality Assurance</h3>
                  <p>
                    Ensuring the reliability and quality of products through
                    comprehensive testing, code reviews, and continuous
                    improvement.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
              <div className="service-item item-indigo position-relative">
                <i className="bi bi-cloud-upload icon" />{" "}
                {/* Cloud Integration Icon */}
                <div>
                  <h3>Cloud Integration</h3>
                  <p>
                    Integrating cloud-based services and solutions for seamless
                    scalability, storage, and security of your digital products.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={600}>
              <div className="service-item item-pink position-relative">
                <i className="bi bi-bar-chart-line icon" />{" "}
                {/* Performance Monitoring Icon */}
                <div>
                  <h3>Performance Monitoring</h3>
                  <p>
                    Tracking and analyzing product performance in real-time, using
                    insights to optimize user experience and functionality.
                  </p>
                </div>
              </div>
            </div>
            {/* End Service Item */}
          </div>
        </div>
      </section>
      {/* /Services Section */}
      {/* &gt; */}
      {/* More Features Section */}
      <section id="more-features" className="more-features section">
        <div className="container">
          <div className="row justify-content-around gy-4">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <h3>Digital Product Development by Nyas Consultants</h3>
              <p>
                Comprehensive digital product development ensuring innovative,
                scalable, and impactful solutions.
              </p>
              <div className="row">
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-lightbulb flex-shrink-0" />{" "}
                  {/* Ideation & Concept Icon */}
                  <div>
                    <h4>Conceptualization</h4>
                    <p>
                      Turning creative ideas into well-defined digital product
                      concepts for market success.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-code-slash flex-shrink-0" />{" "}
                  {/* Development Icon */}
                  <div>
                    <h4>Advanced Development</h4>
                    <p>
                      Developing robust applications using ASP .NET, WCF, WPF,
                      .NET Core, and Java.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-cloud-upload flex-shrink-0" />{" "}
                  {/* Cloud Integration Icon */}
                  <div>
                    <h4>Cloud Integration</h4>
                    <p>
                      Integrating cloud-based solutions for optimal performance
                      and scalability.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
                <div className="col-lg-6 icon-box d-flex">
                  <i className="bi bi-patch-check flex-shrink-0" />{" "}
                  {/* Quality Assurance Icon */}
                  <div>
                    <h4>Quality Assurance</h4>
                    <p>
                      Ensuring superior product quality through rigorous testing
                      and optimization.
                    </p>
                  </div>
                </div>
                {/* End Icon Box */}
              </div>
            </div>
            <div
              className="features-image col-lg-5 order-1 order-lg-2"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <img
                src="assets/assetscross/img/digitalproductdes.png"
                alt="Digital Product Development by Nyas Consultants"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Faq Section */}
      <section id="faq" className="faq section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10" data-aos="fade-up" data-aos-delay={100}>
              <div className="faq-container">
                <div className="faq-item faq-active">
                  <h3>What is Digital Product Development?</h3>
                  <div className="faq-content">
                    <p>
                      Digital product development involves designing, building,
                      and launching products using cutting-edge technologies to
                      meet market demands and customer needs.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>
                    Why is technology selection critical in product development?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Choosing the right technology ensures scalability, security,
                      performance, and compatibility with business goals,
                      optimizing long-term product success.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>How does the development process ensure innovation?</h3>
                  <div className="faq-content">
                    <p>
                      Our iterative approach to development fosters continuous
                      innovation, allowing for flexibility, testing, and the
                      integration of user feedback.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>
                    What role does cloud integration play in product development?
                  </h3>
                  <div className="faq-content">
                    <p>
                      Cloud integration enhances flexibility, scalability, and
                      data security, allowing products to adapt to changing needs
                      and support a global user base.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>
                    How do you ensure product quality throughout development?
                  </h3>
                  <div className="faq-content">
                    <p>
                      We employ rigorous testing, continuous monitoring, and code
                      reviews to ensure the product meets quality standards and
                      performs seamlessly.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
                <div className="faq-item">
                  <h3>How do you handle post-launch support and maintenance?</h3>
                  <div className="faq-content">
                    <p>
                      We offer ongoing maintenance, updates, and troubleshooting
                      to ensure the product stays relevant, secure, and optimized
                      for future growth.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right" />
                </div>
                {/* End Faq item*/}
              </div>
            </div>
            {/* End Faq Column*/}
          </div>
        </div>
      </section>
      {/* /Faq Section */}
    </main>
    {/* Scroll Top */}
    <a
      href="#"
      id="scroll-top"
      className="scroll-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up-short" />
    </a>
    {/* Preloader */}
    {/* <div id="preloader" /> */}
    {/* Vendor JS Files */}
    {/* Main JS File */}
  </>
  

  
  );
};

export default DigitalProductDevelopmentArea;
