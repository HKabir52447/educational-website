import React from "react";
import video from "../../videos/production ID-5198159.mp4";
import "./About.css";
import aboutImg from '../../images/brighnt.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="cls-intro container-fluid">
        <video width="100%" height="500px" autoPlay muted loop>
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
      <div className='about-details container'>
        <div>
          <h5 className="text-center pt-4 sub-heading">About Us</h5>
          <h3 className="text-center heading"> Bright Future </h3>
          <p className='px-3'>Bright future is academic coaching cetner. It is established in Oct 04,2021. We provided u best teaching services. Where you can compelte your academic syllebous. Science, Arts and Commerce all groups of sub are covered by qualitiful teachers. All teachers are from public university.

          </p>
        </div>
        <div className='d-flex align-items-center'>
    <img src={aboutImg} className='img-fluid ' alt='aboutImg'/>
        </div>
      </div>
    </div>
  );
};

export default About;
