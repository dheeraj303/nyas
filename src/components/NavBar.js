import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
  };

  // Control sidebar navigation
  let items = document.querySelectorAll('.menu-item-has-children > a');
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector('.sub-menu')
          .classList.toggle('active');
        this.classList.toggle('open');
      };
    }
  }

  return (
    <>
      {/* search popup start*/}
      <div
        className={searchShow ? 'td-search-popup active' : 'td-search-popup '}
        id="td-search-popup"
      >
        <form action="/" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </div>
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? 'body-overlay active' : 'body-overlay'}
        id="body-overlay"
      ></div>
      {/* navbar start */}
      <nav className="navbar navbar-area navbar-area_1 navbar-expand-lg">
        <div className="container nav-container navbar-bg">
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? 'menu toggle-btn d-block d-lg-none open'
                  : 'menu toggle-btn d-block d-lg-none'
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link to="/">
              <img src="assets/img/logo4.png" alt="img" />
            </Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <span className="search-bar-btn" onClick={searchActive}>
              <FaSearch />
            </span>
          </div>
          <div
            className={
              active
                ? 'collapse navbar-collapse sopen'
                : 'collapse navbar-collapse'
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-end">
              <li className="menu-item-has-children">
                <Link to="/">Home</Link>
                {/* <ul className="sub-menu">
                  <li>
                    <Link to="/">IT / Softwer Agency</Link>
                  </li>
                  <li>
                    <Link to="/index-2">SaaS App Landing</Link>
                  </li>
                  <li>
                    <Link to="/index-3">Payments Solution</Link>
                  </li>
                  <li>
                    <Link to="/index-4">Software Company</Link>
                  </li>
                  <li>
                    <Link to="/index-5">Artificial Intelligence</Link>
                  </li>
                  <li>
                    <Link to="/index-6">NFT Service</Link>
                  </li>
                  <li>
                    <Link to="/index-7">Cyber Security</Link>
                  </li>
                  <li>
                    <Link to="/index-8">Hardware Service</Link>
                  </li>
                  <li>
                    <Link to="/index-9">ICO Landing</Link>
                  </li>
                  <li>
                    <Link to="/index-10">Personal Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/index-11">SEO Service</Link>
                  </li>
                </ul> */}
              </li>
              <li className="menu-item-has-children">
                <Link to="/about">About Us</Link>
                {/* <ul className="sub-menu">
                  <li>
                    <Link to="/service">Service 01</Link>
                  </li>
                  <li>
                    <Link to="/service-2">Service 02</Link>
                  </li>
                  <li>
                    <Link to="/service-3">Service 03</Link>
                  </li>
                  <li>
                    <Link to="/service-4">Service 04</Link>
                  </li>
                  <li>
                    <Link to="/service-5">Service 05</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Service Single</Link>
                  </li>
                </ul> */}
              </li>
              <li className="menu-item-has-children">
                <Link to="/service">Our Services</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/mobile-app">Digital App Development Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/cross-platfrom-development">Cross Platform Apps Development</Link>
                  </li>
                  
                  <li>
                    <Link to="/digital-product-development">Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/project-management">Operations Consultancy Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/meta-campaign">Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal-services">Legal Services
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/web-development">Custom Website Design & Development
                    </Link>
                  </li>

                  <li>
                    <Link to="/mvp-development">MVP Development & Testing
                    </Link>
                  </li>

                  <li>
                    <Link to="/ui-ux-design">UI/UX Design & Prototyping
                    </Link>
                  </li>

                  <li>
                    <Link to="/web-development">Ongoing Software & Website maintenance
                    </Link>
                  </li>     

                  <li>
                    <Link to="/blockchain">Block Chain Solutions & Decentralized Applications
                    </Link>
                  </li>            

                  <li>
                    <Link to="/digital-app-development">Digital App Development Service
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link to="/pricing-2">Pricing 02</Link>
                  </li> */}
                </ul>
              </li>
              <li className="menu-item-has-children mega-menu">
                <Link to="/technologies">Technologies</Link>
                {/* <div className="sub-menu">
                  <div className="row">
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/">IT / Softwer Agency</Link>
                        </li>
                        <li>
                          <Link to="/index-2">SaaS App Landing</Link>
                        </li>
                        <li>
                          <Link to="/index-3">Payments Solution</Link>
                        </li>
                        <li>
                          <Link to="/index-4"> Software Company</Link>
                        </li>
                        <li>
                          <Link to="/index-5">Artificial Intelligence</Link>
                        </li>
                        <li>
                          <Link to="/index-6">NFT Service</Link>
                        </li>
                        <li>
                          <Link to="/index-7">Cyber Security</Link>
                        </li>
                        <li>
                          <Link to="/index-8">Hardware Service</Link>
                        </li>
                        <li>
                          <Link to="/index-9">ICO Landing</Link>
                        </li>
                        <li>
                          <Link to="/index-10">Personal Portfolio</Link>
                        </li>
                        <li>
                          <Link to="/index-11">SEO Service</Link>
                        </li>
                      </ul>
                    </div>
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/service">Service 01</Link>
                        </li>
                        <li>
                          <Link to="/service-2">Service 02</Link>
                        </li>
                        <li>
                          <Link to="/service-3">Service 03</Link>
                        </li>
                        <li>
                          <Link to="/service-4">Service 04</Link>
                        </li>
                        <li>
                          <Link to="/service-5">Service 05</Link>
                        </li>
                        <li>
                          <Link to="/service-details">Service Single</Link>
                        </li>
                      </ul>
                    </div>
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/project">Project 01</Link>
                        </li>
                        <li>
                          <Link to="/project-2">Project 02</Link>
                        </li>
                        <li>
                          <Link to="/project-3">Project 03</Link>
                        </li>
                        <li>
                          <Link to="/project-details">Case Study Details</Link>
                        </li>
                        <li>
                          <Link to="/pricing">Pricing 01</Link>
                        </li>
                        <li>
                          <Link to="/pricing-2">Pricing 02</Link>
                        </li>
                      </ul>
                    </div>
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/team">Team 01</Link>
                        </li>
                        <li>
                          <Link to="/team-2">Team 02</Link>
                        </li>
                        <li>
                          <Link to="/team-3">Team 03</Link>
                        </li>
                        <li>
                          <Link to="/team-details">Team Details</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
              </li>

              <li className="menu-item-has-children">
                <Link to="/career">Career</Link>
                {/* <ul className="sub-menu">
                  <li>
                    <Link to="/blog">Blog 01</Link>
                  </li>
                  <li>
                    <Link to="/blog-2">Blog 02</Link>
                  </li>
                  <li>
                    <Link to="/blog-3">Blog 03</Link>
                  </li>
                  <li>
                    <Link to="/blog-4">Blog 04</Link>
                  </li>
                  <li>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                </ul> */}
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop align-self-center">
            <a className="navbar-phone" href="tel:">
              <span className="icon">
                <img src="assets/img/icon/1.png" alt="img" />
              </span>
              <span>Need help?</span>
              <h5>+353 85 161 3637</h5>
            </a>
          </div>
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;
