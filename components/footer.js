import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
              AIIDL Technology isn't just a company – it's a community united by a passion for technology, a thirst for innovation, and a commitment to driving digital progress. We invite you to be a part of this journey, to explore the frontiers of possibility, and to shape a future where AIIDL Technology is synonymous with digital transformation.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
                USA- 2123 Bluewillow dr Houston Texas 77042 USA <br/>
                +1(914)556-1554
                <br />  <br />
                INDIA- Mukhiya Complex, 4th floor Sector 35, <br/> 
                Noida, Uttar Pradesh 201301 <br/>
                +91-8377963214
              </p>
              <p>
                Email: <a href="mailto: info@aiidltechnologies.com">info@aiidltechnologies.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <a href="#">AIIDL Technologies Pvt. Ltd.</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
