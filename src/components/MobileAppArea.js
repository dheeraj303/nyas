import React from "react";

const MobileAppArea = () => {
  return (
    <>
   
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
      rel="stylesheet"
    />
    {/* Vendor CSS Files */}
    <link href="assets/assets1/vendor/icofont/icofont.min.css" rel="stylesheet" />
    <link href="assets/assets1/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
    <link href="assets/assets1/vendor/venobox/venobox.css" rel="stylesheet" />
    <link
      href="assets/assets1/vendor/owl.carousel/assets/assets1/owl.carousel.min.css"
      rel="stylesheet"
    />
    {/* Template Main CSS File */}
    <link href="assets/assets1/css/style.css" rel="stylesheet" />
    <section id="hero">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
            data-aos="fade-up"
          >
            <div>
              <h1>Mobile App Development</h1>
              <h2>
                React Native, developed by Facebook, boosts mobile app
                development, gaining popularity among startups and industry giants
                like Instagram, Uber, and Bloomberg for its efficiency and
                performance.{" "}
              </h2>
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="fade-left"
          >
            <img src="assets/assets1/img/hero-img.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
    {/* End Hero */}
    <main id="main">
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in">
              <img src="assets/assets1/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 d-flex flex-column justify-contents-center"
              data-aos="fade-left"
            >
              <div className="content pt-4 pt-lg-0">
                <h3>Mobile App Development</h3>
                <p className="font-italic">
                  React Native, introduced by Facebook, revolutionizes mobile app
                  development, gaining popularity among startups and industry
                  leaders. Apps like Instagram, Uber, and Bloomberg rely on it.
                </p>
                <ul>
                  <li>
                    <i className="icofont-check-circled" />
                    Cross-platform compatibility for faster development.
                  </li>
                  <li></li>
                  <li>
                    <i className="icofont-check-circled" /> Enhanced performance
                    and native-like experience.
                  </li>
                  <li>
                    <i className="icofont-check-circled" /> Widely adopted by top
                    companies like Instagram, Uber, and Salesforce.
                  </li>
                </ul>
                <p>
                  Our expert mobile app developers craft tailor-made iOS and
                  Android applications, delivering exceptional user experiences
                  and advanced functionality to meet your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mt-2 mb-tg-0 order-2 order-lg-1">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item" data-aos="fade-up">
                  <a
                    className="nav-link active show"
                    data-toggle="tab"
                    href="#tab-1"
                  >
                    <h4>Native App Development</h4>
                    <p>Platform-specific apps offering high performance.</p>
                  </a>
                </li>
                <li
                  className="nav-item mt-2"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <a className="nav-link" data-toggle="tab" href="#tab-2">
                    <h4>Cross-Platform App Development</h4>
                    <p>Single codebase for both iOS and Android.</p>
                  </a>
                </li>
                <li
                  className="nav-item mt-2"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <a className="nav-link" data-toggle="tab" href="#tab-3">
                    <h4>Hybrid App Development</h4>
                    <p>Combines native and web app features.</p>
                  </a>
                </li>
                <li
                  className="nav-item mt-2"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <a className="nav-link" data-toggle="tab" href="#tab-4">
                    <h4>Web App Development</h4>
                    <p>Mobile-optimized websites accessed via browsers.</p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <figure>
                    <img
                      src="assets/assets1/img/features-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="tab-pane" id="tab-2">
                  <figure>
                    <img
                      src="assets/assets1/img/features-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="tab-pane" id="tab-3">
                  <figure>
                    <img
                      src="assets/assets1/img/features-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="tab-pane" id="tab-4">
                  <figure>
                    <img
                      src="assets/assets1/img/features-4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Features Section */}
      {/* ======= F.A.Q Section ======= */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
          </div>
          <ul className="faq-list">
            <li data-aos="fade-up">
              <a data-toggle="collapse" className="" href="#faq1">
                What is mobile app development?{" "}
                <i className="icofont-simple-up" />
              </a>
              <div id="faq1" className="collapse show" data-parent=".faq-list">
                <p>
                  Mobile app development is the process of creating software
                  applications that run on mobile devices, such as smartphones and
                  tablets. This involves designing, coding, testing, and deploying
                  apps for various platforms like iOS and Android.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={100}>
              <a data-toggle="collapse" href="#faq2" className="collapsed">
                What programming languages are used for mobile app development?{" "}
                <i className="icofont-simple-up" />
              </a>
              <div id="faq2" className="collapse" data-parent=".faq-list">
                <p>
                  Mobile apps are typically developed using programming languages
                  such as Swift (for iOS), Kotlin (for Android), Java (for
                  Android), and Dart (for Flutter). Hybrid apps can also be built
                  using frameworks like React Native or Ionic, which allow for
                  cross-platform development.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={200}>
              <a data-toggle="collapse" href="#faq3" className="collapsed">
                What is the difference between native and hybrid mobile apps?{" "}
                <i className="icofont-simple-up" />
              </a>
              <div id="faq3" className="collapse" data-parent=".faq-list">
                <p>
                  Native apps are built specifically for one platform (iOS or
                  Android) using platform-specific languages and tools, offering
                  better performance and access to device features. Hybrid apps
                  are built using web technologies (HTML, CSS, JavaScript) and can
                  run on multiple platforms, making them more cost-effective but
                  sometimes less performant than native apps.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={300}>
              <a data-toggle="collapse" href="#faq4" className="collapsed">
                How long does it take to develop a mobile app?{" "}
                <i className="icofont-simple-up" />
              </a>
              <div id="faq4" className="collapse" data-parent=".faq-list">
                <p>
                  The time required to develop a mobile app depends on its
                  complexity, the number of features, the platform, and the
                  development team's expertise. Simple apps may take a few weeks,
                  while more complex ones can take several months.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={400}>
              <a data-toggle="collapse" href="#faq5" className="collapsed">
                What is the cost of mobile app development?{" "}
                <i className="icofont-simple-up" />
              </a>
              <div id="faq5" className="collapse" data-parent=".faq-list">
                <p>
                  The cost of mobile app development varies based on factors such
                  as the complexity of the app, the features required, and the
                  development platform. On average, a basic app could cost
                  anywhere from a few thousand dollars, while more advanced apps
                  could cost tens of thousands or more.
                </p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay={500}>
              <a data-toggle="collapse" href="#faq6" className="collapsed">
                How do I test my mobile app? <i className="icofont-simple-up" />
              </a>
              <div id="faq6" className="collapse" data-parent=".faq-list">
                <p>
                  Mobile app testing is crucial to ensure that the app works as
                  expected across different devices and operating systems. Testing
                  methods include functional testing, usability testing,
                  performance testing, and security testing. Automated tools, such
                  as Appium or Selenium, can also be used to streamline the
                  testing process.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
    {/* End #main */}
    <a href="#" className="back-to-top">
      <i className="bx bxs-up-arrow-alt" />
    </a>
    {/* Vendor JS Files */}
    {/* Template Main JS File */}
  </>
  
  );
};

export default MobileAppArea;
