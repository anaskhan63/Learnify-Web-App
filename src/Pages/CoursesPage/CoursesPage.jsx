import React, { useContext } from 'react'
import NavBar from "../../Components/Navbar/Navbar"
import { TeacherPortalContext } from '../../Context/TeacherPortalContext'
const CoursesPage = () => {
  const { AllCourses } = useContext(TeacherPortalContext);
  console.log(AllCourses);
  return (
    <>
      <NavBar />
      <div>
        courlse:
        {
          AllCourses.map((currElem, i) => {
            return <div key={i}>
              <p>Teacher name: <strong>{currElem.TeacherName}</strong></p>
              {currElem.Video && currElem.Video.map((currVideo, i) => (
                <video width="320" height="240" controls key={i}>
                  <source src={URL.createObjectURL(currVideo)} type={currVideo.type} />
                  Your browser does not support the video tag.
                </video>
              ))}
              <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=5R1sE76em-vyw90E&amp;list=PLwGdqUZWnOp1Rab71vx2zMF6qpwGDB2Z1"  ></iframe>
            </div>
          })
        }
      </div>
    </>
  )
}

export default CoursesPage