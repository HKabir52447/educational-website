import React from "react";
import "./Service.css";

const Service = (props) => {
  const { teacher, sub, price, img } = props.services;
  return (
    <div className="course">
        <img className='img-fluid' src={img} alt={sub} />
      <h4 className='sub-heading text-center'>{sub}</h4>
      <h5 className='heading pb-1'> Course teacher: {teacher} </h5>
      <p>
        Welcome to Bright Future course. Here we provied academic lessons by
        qualitiful teachers
      </p>
      <div className='d-flex justify-content-evenly'>
        <p><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i></p>
        <h4 className='heading pb-2'> $<span className='sub-heading'>{price}</span> </h4>
      </div>
      <div className='text-center'>
          <button className='btn sub-heading px-4 py-1 enroll fs-4'> Enroll <span className='arrow'><i class="fas fa-long-arrow-alt-right"></i></span> </button>
      </div>
    </div>
  );
};

export default Service;
