import axios from "axios";
import React, { useState } from "react";
import Message from "../Message/Message";
import "./contact.css";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState(true);

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          "https://blood-donation-e9912-default-rtdb.firebaseio.com/queries.json",
          {
            fullName: fullName,
            phone: phoneNumber,
            email: email,
            message: message,
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setFormError(false);
            formError ? (
              <Message title="Data Submitted" />
            ) : (
              <Message title="Some error occurred" />
            );
          }

          if (res.status !== 200) {
          }
          setFullName("");
          setPhoneNumber("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form" onSubmit={formSubmit}>
      <label htmlFor="fullName" className="form-label">
        Full Name:
      </label>
      <input
        id="fullName"
        type="text"
        className="form-control"
        placeholder="Please enter your full name"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <label htmlFor="phoneNumber" className="form-label">
        Phone Number:
      </label>
      <input
        id="phoneNumber"
        type="number"
        className="form-control"
        required
        value={phoneNumber}
        placeholder="Please enter your Phone number"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label htmlFor="email">Email Address:</label>
      <input
        id="email"
        type="email"
        className="form-control"
        placeholder="Please enter your email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        rows="10"
        cols="100"
        required
        value={message}
        placeholder="Please enter your message"
        className="form-control"
        onChange={(e) => setMessage(e.target.value)}
      />
      <div id="success"></div>
      <button className="btn btn-primary" type="submit">
        Send Message
      </button>
      {formError}
    </form>
  );
};

export default ContactForm;
