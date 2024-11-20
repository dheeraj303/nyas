import React from "react";

const UIArea = () => {
  return (
    <>
    {/* Styles */}
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
      rel="stylesheet"
    />
    <link href="assets/ui-ux/css/swiper.css" rel="stylesheet" />
    <link href="assets/ui-ux/css/styles.css" rel="stylesheet" />
    {/* Navigation */}
    <nav
      id="navbar"
      className="navbar navbar-expand-lg fixed-top navbar-dark"
      aria-label="Main navigation"
    >
      <div className="container">
        {/* Image Logo */}
        {/* Text Logo - Use this if you don't have a graphic logo */}
        {/* <a class="navbar-brand logo-text" href="index.html">Desi</a> */}
        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          id="navbarSideCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav ms-auto navbar-nav-scroll">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#header">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#services">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#projects">Projects</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Drop</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdown01">
                        <li><a class="dropdown-item" href="article.html">Article Details</a></li>
                        <li><div class="dropdown-divider"></div></li>
                        <li><a class="dropdown-item" href="terms.html">Terms Conditions</a></li>
                        <li><div class="dropdown-divider"></div></li>
                        <li><a class="dropdown-item" href="privacy.html">Privacy Policy</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
            <span class="nav-item social-icons">
                <span class="fa-stack">
                    <a href="#your-link">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                </span>
                <span class="fa-stack">
                    <a href="#your-link">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i class="fab fa-twitter fa-stack-1x"></i>
                    </a>
                </span>
            </span>
        </div> end of navbar-collapse */}
      </div>{" "}
      {/* end of container */}
    </nav>{" "}
    {/* end of navbar */}
    {/* end of navigation */}
    {/* Header */}
    <header id="header" className="header">
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="h1-large">
                UI/UX Design &amp;
                <br /> Prototyping
              </h1>
            </div>{" "}
            {/* end of col */}
          </div>{" "}
          {/* end of row */}
        </div>{" "}
        {/* end of container */}
      </div>{" "}
      {/* end of header-content */}
      {/* Video Background */}
      <video
        autoPlay=""
        loop=""
        muted=""
        id="video-background"
        poster="assets/ui-ux/images/header-background.jpg"
        playsInline=""
      >
        <source src="assets/ui-ux/images/header-background-video.mp4" type="video/mp4" />
      </video>
      {/* end of video background */}
    </header>{" "}
    {/* end of header */}
    {/* end of header */}
    {/* Introduction */}
    <div id="introduction" className="cards-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading text-left">
              Complete social media services
            </h2>
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
        <div className="row">
          <div className="col-lg-12">
            <p className="p-heading text-justify">
              Exceptional UI/UX design is the backbone of any engaging digital
              experience. Nyas’s approach to UI/UX design prioritizes ease of use,
              aesthetic appeal, and meaningful user interactions to build products
              that resonate with users.
            </p>
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-left">Service Overview</h3>
            <p className="text-justify">
              UI/UX design encompasses creating both the visual and interactive
              elements of digital products, ensuring that applications and
              websites are intuitive, visually cohesive, and user-centered.
              Prototyping further allows businesses to test and refine designs
              before committing to full-scale development.
            </p>
            <h3 className="text-left">Why Effective UI/UX Design is Crucial</h3>
            <p className="text-justify">
              A well-designed user interface directly impacts customer
              satisfaction and retention. A poor user experience can lead to high
              bounce rates, low engagement, and loss of potential customers.
              Thoughtful UI/UX design makes applications easier to use, reduces
              friction in interactions, and can drive higher conversion rates by
              aligning the design with user behaviors and expectations.
            </p>
            <h3 className="text-left">Nyas’s Unique Value in UI/UX</h3>
            <p className="text-justify">
              Nyas focuses on data-driven and human-centered design to create
              digital experiences that are visually appealing and easy to
              navigate. Our team of designers and UX specialists uses design
              research, user personas, and A/B testing to create interfaces that
              are both functional and delightful. With tools like interactive
              prototypes, we enable clients to see, feel, and refine the design
              before development, ensuring a more seamless transition to the final
              product.
            </p>
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>{" "}
    {/* end of cards-1 */}
    <div id="projects" className="filter bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="h2-heading">Steps in UI/UX Design Process</h2>
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
        <div className="row">
          <div className="col-lg-12">
            <div className="grid">
              <div className="element-item finance">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="assets/ui-ux/images/project-1.jpg"
                    alt="alternative"
                  />
                  <p>
                    <strong>User Research and Persona Development</strong>-
                    Identifying target audience needs and behaviors to inform
                    design choices.
                  </p>
                </a>
              </div>
              <div className="element-item finance">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="assets/ui-ux/images/project-2.jpg"
                    alt="alternative"
                  />
                  <p>
                    <strong>Wireframing and Mockups</strong> - Creating initial
                    layouts to organize content, navigation, and design elements.
                  </p>
                </a>
              </div>
              <div className="element-item finance">
                <a href="article.html">
                  <img
                    className="img-fluid"
                    src="assets/ui-ux/images/project-3.jpg"
                    alt="alternative"
                  />
                  <p>
                    <strong>Visual Design</strong> - Developing the final
                    aesthetic, including typography, color schemes, and branding
                    elements.
                  </p>
                </a>
              </div>
              <div className="element-item business finance">
                <a href="article.html">
                  <img
                    className="img-fluid"
                    src="assets/ui-ux/images/project-4.jpg"
                    alt="alternative"
                  />
                  <p>
                    <strong> Prototyping and Testing</strong> - Building
                    interactive prototypes to validate design flow, usability, and
                    user satisfaction.
                  </p>
                </a>
              </div>
              <div className="element-item business finance">
                <a href="article.html">
                  <img
                    className="img-fluid"
                    src="assets/ui-ux/images/project-5.jpg"
                    alt="alternative"
                  />
                  <p>
                    <strong> Final Design and Handoff</strong> - Refining the
                    design based on feedback and preparing assets for development.
                  </p>
                </a>
              </div>
            </div>{" "}
            {/* end of grid */}
            {/* end of filter */}
          </div>{" "}
          {/* end of col */}
        </div>{" "}
        {/* end of row */}
      </div>{" "}
      {/* end of container */}
    </div>{" "}
    {/* end of filter */}
    {/* Back To Top Button */}
    {/* <button onclick="topFunction()" id="myBtn">
      <img src="images/up-arrow.png" alt="alternative" />
    </button> */}
    {/* end of back to top button */}
    {/* Scripts */}
    {/* Bootstrap framework */}
    {/* Swiper for image and text sliders */}
    {/* Purecounter counter for statistics numbers */}
    {/* Isotope for filter */}
    {/* Custom scripts */}
  </>  
  );
};

export default UIArea;
