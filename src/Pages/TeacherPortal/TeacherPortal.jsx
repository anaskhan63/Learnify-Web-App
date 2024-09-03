import React, { useContext, useState, useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from 'react-slick'; // Import Slider from react-slick
import { TeacherPortalContext } from '../../Context/TeacherPortalContext';
import { LoginSignupContext } from '../../Context/LoginSignupContext';
import { ThemeContext } from '../../Context/ThemeContext';
import { message, Tooltip } from 'antd';
import RightArrow from '../../React-Slick-Custom-Arrows/RightArrow';
import LeftArrow from '../../React-Slick-Custom-Arrows/LeftArrow';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';

const TeacherPortal = () => {
  const { addCourse } = useContext(TeacherPortalContext);
  const { signupData } = useContext(LoginSignupContext);
  const { theme } = useContext(ThemeContext);
  const videoInputRef = useRef(null);
  const [CurrentTeacherAllCourses, setCurrentTeacherAllCourses] = useState([]);
  const [TeacherCourse, setTeacherCourse] = useState({
    TeacherName: "",
    CourseName: "",
    Description: "",
    Pricing: 0,
    Video: [],
    Date: new Date().toLocaleDateString()
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
    setCurrentTeacherAllCourses((prev) => [...prev, TeacherCourse]);

    addCourse(TeacherCourse);
    message.success("Course Added Successfully!");
    setTeacherCourse({
      TeacherName: "",
      CourseName: "",
      Description: "",
      Pricing: 0,
      Video: [],
      Date: new Date().toLocaleDateString()
    });
    videoInputRef.current.value = "";
  };

  const handleCourseDelete = (index) => {
    setCurrentTeacherAllCourses((prev) =>
      prev.filter((course, i) => i !== index)
    );
    message.success("Course Deleted Successfully!");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };


  return (
    <>
      <Navbar />
      <h1 className="text-3xl raleway p-5 text-center">
        Welcome <span className="italic font-bold">{signupData.name}</span> to <strong>Learnify!</strong>
      </h1>
      <div className={`${theme === "light" ? "bg-white border" : "bg-[#2c3030] border border-gray-400"} rounded-lg p-4 w-[60%] block mx-auto`}>
        <h1 className="text-2xl p-5 text-center">Upload New Courses</h1>
        <form onSubmit={handleTeacherCourseDataSubmit} className="grid grid-cols-1 gap-3 p-5 w-full">
          {/* Form Inputs */}
          <label htmlFor="Pricing " className='mt-2 text-sm text-gray-400'>Instructor Name*</label>
          <input
            className={`p-3 border rounded ${theme === "light" ? "bg-white text-black border-gray-400" : "bg-[#1F1F1F] text-white border-white"}`}
            type="text"
            placeholder="Enter Instructor Name"
            name="TeacherName"
            required
            value={TeacherCourse.TeacherName}
            onChange={handleCourseData}
          />
          <label htmlFor="Pricing " className='mt-2 text-sm text-gray-400'>Course Title*</label>
          <input
            className={`p-3 border rounded ${theme === "light" ? "bg-white text-black border-gray-400" : "bg-[#1F1F1F] text-white border-white"}`}
            type="text"
            placeholder="Enter Course Title"
            required
            name="CourseName"
            value={TeacherCourse.CourseName}
            onChange={handleCourseData}
          />
          <label htmlFor="Pricing " className='mt-2 text-sm text-gray-400'>Description*</label>
          <textarea
            className={`p-3 border rounded ${theme === "light" ? "bg-white text-black border-gray-400" : "bg-[#1F1F1F] text-white border-white"}`}
            rows={6}
            maxLength={1200}
            type="text"
            placeholder="Enter Description About Course"
            required
            name="Description"
            value={TeacherCourse.Description}
            onChange={handleCourseData}
          />
          <label htmlFor="Pricing " className='mt-2 text-sm text-gray-400'>Pricing 0 or above*</label>
          <input
            className={`p-3 border rounded ${theme === "light" ? "bg-white text-black border-gray-400" : "bg-[#1F1F1F] text-white border-white"}`}
            type="number"
            placeholder="Enter Pricing"
            required
            name="Pricing"
            value={TeacherCourse.Pricing}
            onChange={handleCourseData}
          />
          <label htmlFor="Pricing " className='mt-2 text-sm text-gray-400'>Course Video's*</label>
          <input
            className='p-3 border rounded'
            type="file"
            accept="video/*"
            multiple
            required
            onChange={handleVideoUpload}
            ref={videoInputRef}
          />

          <button type="submit" className={`px-7 py-2 bg-transparent text-lg border ${theme === "light" ? "border-[#90C8F7] hover:bg-[#90C8F7]" : "border-gray-300 hover:border-[#3b4247] hover:bg-[#3b4247]"} rounded-md transition duration-300 hover:text-white`}>
            Upload
          </button>
        </form>
      </div>

      <h2 className="text-3xl p-5 text-center mt-9 outfit">Your Courses</h2>
      <p className="text-center p-4">
        {CurrentTeacherAllCourses.length <= 0 ? "You didn't upload any course yet!" : ""}
      </p>
      <section className="p-4 sm:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CurrentTeacherAllCourses.map((course, index) => (
          <div key={index} className="p-5 bg-white text-black border border-gray-400 rounded flex flex-col justify-between transition ease-linear duration-150 hover:scale-105">
            <div className="flex-grow">
              <h1 className="text-3xl outfit font-medium">
                <span className='text-sm font-medium'>Author: </span> {course.CourseName}
              </h1>
              <p className="text-base text-gray-700 mt-3">
                <span className='text-sm font-medium'>About Course: </span> {course.Description}
              </p>
              <p className="text-base text-gray-700 mt-2">
                <span className='text-sm font-medium'>Upload on: </span>  <strong>{course.Date}</strong>
              </p>
              <p className="text-base text-gray-700 mt-2 bg-blue-300 w-fit px-3 rounded-lg">
                <span className='text-sm font-medium'>Pricing: </span> <strong>{course.Pricing === 0 ? 'Free' : `$${course.Pricing}`}</strong>
              </p>
              <div className="p-4 border-gray-400 border-t-2 mt-3">
                {course.Video.length > 0 && (
                  <Slider {...sliderSettings}>
                    {course.Video.map((currVideo, i) => (
                      <div key={i} className="video flex flex-col p-5">
                        <video className="rounded" controls>
                          <source src={URL.createObjectURL(currVideo)} type={currVideo.type} />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
            <Tooltip placement='bottom' title="Want To Delete this Course?">
              <button onClick={() => handleCourseDelete(index)} className='p-3 mt-5 bg-red-500 text-white w-full text-center rounded-md text-base hover:opacity-90'>
                Delete <i className='ri-delete-bin-6-line' />
              </button>
            </Tooltip>
          </div>
        ))}
      </section>
<div className="text-center p-5">
<Button HrefLink={"/courses"} Title={"Go To Courses Page"} />
</div>
    </>
  );
};

export default TeacherPortal;
