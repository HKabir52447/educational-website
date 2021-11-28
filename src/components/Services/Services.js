import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import './Services.css'

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("courses.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className='py-4 container'>
      <h5 className="sub-heading text-center pt-2">Services</h5>
      <h3 className="heading text-center">Our Courses</h3>
      <div className='course-container'>
        {services.map((service) => (
          <Service key={service.id} services={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
