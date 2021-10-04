import React, { useEffect, useState } from "react";
import Teacher from "../Teacher/Teacher";
import "./Teachers.css";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("teachersapi.JSON")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);
  return (
    <div className="teachers pt-4">
      <h5 className="text-center sub-heading">Teachers</h5>
      <h3 className="text-center heading">Our Qualitiful Teachers</h3>
      <div className="teacher-container">
        {teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher}></Teacher>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
