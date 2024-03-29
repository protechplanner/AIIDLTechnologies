import React, { Fragment } from "react";

const ServiceSidebar = () => {
  return (
    <Fragment>
      <aside className="widget categories">
        <h3 className="widget_title">Services</h3>
        <div className="aiidl_categorie_widget">
          <ul>
            <li>
              <a href="service-details">Website Development</a>
            </li>
            <li>
              <a href="graphic">Graphic Designing</a>
            </li>
            <li>
              <a href="digital">Digital Marketing</a>
            </li>
            <li>
              <a href="seo">SEO & Content Writting</a>
            </li>
            <li>
              <a href="appdev">App Development</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="aiidl_services_help">
          <h4>Need AIIDL Technologies help?</h4>
          <p>
            Prefer speaking with a human to filling out a form? call corporate
            office and we will connect you with a team member who can help.
          </p>
          <h2>+91 8377963214</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar;
