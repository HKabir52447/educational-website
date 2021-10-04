import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h5 className="sub-heading text-center pt-2"> Contact us </h5>
      <h3 className="heading text-center">Get in touch </h3>
      <div className="form">
        <div className="d-flex">
          <input
            type="text"
            className="form-control w-50 me-5"
            placeholder="Enter your first name"
          ></input>
          <input
            type="text"
            className="form-control w-50 ms-5"
            placeholder="Enter your last name"
          ></input>
        </div>
        <div className="my-3">
          <input
            type="eamil"
            className="form-control"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter subject"
          ></input>
        </div>
        <div>
          <textarea
            className="w-100"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className='mt-3'>
          <button className="btn sub-heading px-5 py-1 enroll fs-4">
            {" "}
            Send{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
