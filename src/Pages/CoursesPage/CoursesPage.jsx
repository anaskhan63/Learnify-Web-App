import React, { useContext } from 'react'
import NavBar from "../../Components/Navbar/Navbar"
import { TeacherPortalContext } from '../../Context/TeacherPortalContext'
import { LoginSignupContext } from '../../Context/LoginSignupContext';
import Slider from 'react-slick'; // Import Slider from react-slick
import RightArrow from '../../React-Slick-Custom-Arrows/RightArrow';
import LeftArrow from '../../React-Slick-Custom-Arrows/LeftArrow';
import Button from '../../Components/Button/Button';
import { message } from 'antd';
const CoursesPage = () => {
  const { AllCourses } = useContext(TeacherPortalContext);
  const { signupData } = useContext(LoginSignupContext);
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
      <NavBar />
      <div className='p-4'>
        <h1 className="font-medium text-3xl raleway text-center">Welcome <strong>{signupData.name}</strong></h1>
        <p className="text-center outfit">Here you can find best courses with best Instructors<br />  total courses on Learnify {AllCourses.length}</p>
        <section className="p-4 sm:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {AllCourses.map((course, index) => (
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
                {
                  course.Pricing=== 0? (
                    course.Video.length > 0 && (
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
                    )
                  ) : (
                    <div>
                      <p>To watch this course you have to buy it first!</p>
                      <div className='w-full py-16 mt-3  text-center '>
                        <Button onclick={()=> message.info("This Feature is not Available right now!")} Title={`Buy Now for just: $${course.Pricing}`}/>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            
          </div>
        ))}
      </section>
      </div>
    </>
  )
}

export default CoursesPage