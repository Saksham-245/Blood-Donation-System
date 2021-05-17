import React from "react";
import NavBar from "../components/Navbar/Navbar";
import BreadCrumb from "../components/breadcrumbs/Breadcrumbs";
import ContactForm from "../components/ContactForm/ContactForm";
const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "25px", marginLeft: "25px" }}>
        <h3 className="display-3" style={{ fontSize: "30px" }}>
          Contact Us
        </h3>
        <BreadCrumb title="Contact" />
        <h5>
          <strong>Send Us a Message</strong>
        </h5>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
