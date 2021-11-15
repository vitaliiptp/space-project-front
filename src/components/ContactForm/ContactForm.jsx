import React, { useState } from "react";
import axios from "axios";
import './styles.scss'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div className="form-main">
      <form className="form-container primary-navigation" onSubmit={handleSubmit}>
        <div className="form-container--name">
          <label htmlFor="name">Name:</label>
          <input className="form-container--input" type="text" id="name" required />
        </div>
        <div className="form-container--email">
          <label htmlFor="email">Email:</label>
          <input className="form-container--input" type="email" id="email" required />
        </div>
        <div className="form-container--message">
          <label htmlFor="message">Message:</label>
          <textarea className="form-container--input" id="message" required />
        </div>
        <button className="btn ff-sans-cond uppercase letter-spacing-2 text-white" type="submit">{status}</button>
      </form>
    </div>
  );
};

export default ContactForm;
