import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Teacher from "../Teacher/Teacher";
import "./Home.css";

const Home = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("teachersapi.JSON")
      .then((res) => res.json())
      .then((data) => setTeachers(data.slice(0,6)));
  }, []);
  return (
    <div>
      {/* bootstrap carousel */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Bright Future</h2>
              <p>Best teaching center for your bright future</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1599827083902-7ebdbad1744c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2> Awesome classroom</h2>
              <p>Best study environment</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1628243441066-a34e484f18c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Extra care for week students</h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div>
      <Homecourse></Homecourse>
      </div>
      <div className="teachers pt-4">
      <h5 className="text-center sub-heading">Teachers</h5>
      <h3 className="text-center heading">Our Qualitiful Teachers</h3>
      <div className="teacher-container container">
        {teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher}></Teacher>
        ))}
      </div>
    </div>
      
    </div>
  );
};

const Homecourse = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourse(data.slice(0,6)));
  }, []);
  return (
    <div className='pt-5'>
      <h5 className="sub-heading text-center pt-2">Services</h5>
      <h3 className="heading text-center">Our Courses</h3>
      <div className='course-container container'>
        {course.map((course) => (
          <Showcourse key={course.id} course={course}></Showcourse>
        ))}
      </div>
      <div className='text-center my-3'>
      <NavLink className='btn sub-heading px-5 py-1 enroll fs-3' to='/services'>See More</NavLink>
      </div>
    </div>
  );
};

// home showcourse
const Showcourse = (props) => {
  console.log(props.course);
  const { teacher, sub, price, img } = props.course;
  return (
    <div>
      <div className="course container">
        <img className="img-fluid" src={img} alt={sub} />
        <h4 className="sub-heading text-center">{sub}</h4>
        <h5 className="heading pb-0 text-center"> {teacher} </h5>
        <small className='d-block text-center pb-2'>Course teacher</small>
        <p>
          Welcome to Bright Future course. Here we provied academic lessons by
          qualitiful teachers
        </p>
        <div className="d-flex justify-content-evenly">
          <p>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i> <i class="fas fa-star-half-alt"></i>
          </p>
          <h4 className="heading pb-2">
            {" "}
            $<span className="sub-heading">{price}</span>{" "}
          </h4>
        </div>
        <div className="text-center">
          <button className="btn sub-heading px-4 py-1 enroll fs-4">
            {" "}
            Enroll{" "}
            <span className="arrow">
              <i class="fas fa-long-arrow-alt-right"></i>
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
