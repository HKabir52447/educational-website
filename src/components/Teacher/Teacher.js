import React from 'react';
import './Teacher.css';

const Teacher = (props) => {
    const {name, sub, university, img} = props.teacher;
    console.log(img)
    return (
        <div className='teacher'>
            <img src={img} alt={name} className='img-fluid'/>
            <h4 className='name'>{name}</h4>
            <h6>Sub: {sub} </h6>
            <p> University: {university} </p>
            <div className='social-media w-100 d-flex justify-content-evenly'> 
                <a href='https://www.facebook.com/' target='blank'><i class="fab fa-facebook-f"></i></a>
                <a href='https://www.instagram.com/?hl=en' target='blank'><i class="fab fa-instagram"></i></a>
                <a href='https://www.linkedin.com/' target='blank'><i class="fab fa-linkedin-in"></i></a>
                <a href='https://twitter.com/' target='blank'><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    );
};

export default Teacher;