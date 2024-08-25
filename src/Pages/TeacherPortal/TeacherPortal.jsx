import React, { useContext, useState, useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { TeacherPortalContext } from '../../Context/TeacherPortalContext';
import { Link } from 'react-router-dom';
import { LoginSignupContext } from '../../Context/LoginSignupContext';

const TeacherPortal = () => {
  const { AllCourses, addCourse } = useContext(TeacherPortalContext);
  const { signupData } = useContext(LoginSignupContext);

  const videoInputRef = useRef(null);
  const [CurrentTeacherAllCourses, setCurrentTeacherAllCourses] = useState([])
  const [TeacherCourse, setTeacherCourse] = useState({
    TeacherName: "",
    CourseName: "",
    Description: "",
    Pricing: 0,
    Video: [],
    YouTubePlaylist:"",
    
  });

  const handleCourseData = (e) => {
    const { name, value } = e.target;
    setTeacherCourse((prev) => ({
      ...prev,
      [name]: name === "Pricing" ? Number(value) : value,
    }));
  };

  const handleVideoUpload = (e) => {
    setTeacherCourse((prev) => ({
      ...prev,
      Video: Array.from(e.target.files),
    }));
  };

  const handleTeacherCourseDataSubmit = (e) => {
    e.preventDefault();
    setCurrentTeacherAllCourses((prev) => [...prev, TeacherCourse])

    addCourse(TeacherCourse);
    setTeacherCourse({
      TeacherName: "",
      CourseName: "",
      Description: "",
      Pricing: 0, // Reset to 0
      Video: [],
    YouTubePlaylist:"",

    });
    videoInputRef.current.value = "";
  };
  console.log("currect teacher Coureses", CurrentTeacherAllCourses);

  return (
    <>
      <Navbar />
      <h1 className="text-3xl raleway p-5">Welcome to <strong>Learnify!</strong> {signupData.name}</h1>

      <Link to={"/courses"}>Go to courses page</Link>
      <form onSubmit={handleTeacherCourseDataSubmit}>
        <input
          type="text"
          placeholder="Enter Teacher Name"
          name="TeacherName"
          value={TeacherCourse.TeacherName}
          onChange={handleCourseData}
        />
        <input
          type="text"
          placeholder="Enter Course Name"
          name="CourseName"
          value={TeacherCourse.CourseName}
          onChange={handleCourseData}
        />
        <input
          type="text"
          placeholder="Enter Description"
          name="Description"
          value={TeacherCourse.Description}
          onChange={handleCourseData}
        />
        <input
          type="number"
          placeholder="Enter Pricing"
          name="Pricing"
          value={TeacherCourse.Pricing}
          onChange={handleCourseData}
        />
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={handleVideoUpload}
          ref={videoInputRef}
        />
        <button type="submit">Upload</button>
      </form>

      <h2>Course List</h2>
      <ul>
        {CurrentTeacherAllCourses.map((course, index) => (
          <li key={index}>
            <h3>{course.TeacherName}</h3>
            <p><strong>Course Name:</strong> {course.CourseName}</p>
            <p><strong>Description:</strong> {course.Description}</p>
            <p><strong>Pricing:</strong> {course.Pricing === 0 ? 'Free' : course.Pricing}</p>
            {course.Video && course.Video.map((currVideo, i) => (
              <video width="320" height="240" controls key={i}>
                <source src={URL.createObjectURL(currVideo)} type={currVideo.type} />
                Your browser does not support the video tag.
              </video>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeacherPortal;
