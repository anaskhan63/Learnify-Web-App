import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { TeacherPortalContext } from '../../Context/TeacherPortalContext';

const TeacherPortal = () => {
  const { Course, addCourse } = useContext(TeacherPortalContext);

  const handleAddCourse = () => {
    const newCourse = {
      TeacherName: "John Doe",
      CourseName: "React Basics",
      Description: "Learn the basics of React.js",
      Pricing: "Free",
      Video: null,
    };
    addCourse(newCourse);
  };
  console.log(Course);
  console.log(Course.TeacherName);
  
  return (
    <>
      <Navbar />
      <div>
      <button onClick={handleAddCourse}>Add Course</button>
      {/* maping */}
      {
        Course.map((cur,i)=>{
          return <div key={i}>{cur.TeacherName}</div>
        })
      }
      {/* Render or manipulate courses */}
    </div>
      {/* <form onSubmit={HandleTeacherCourseDataSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={TeacherCourse.name}
          onChange={handleCourseData}
          required
        />
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          required
          multiple
        />
        <button type="submit">Upload</button>
      </form> */}
      hello
    </>
  );
};

export default TeacherPortal;
