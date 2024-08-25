import { createContext, useState } from "react";

export const TeacherPortalContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [AllCourses, setAllCourses] = useState([{
    TeacherName: "Thapa Technical",
    CourseName: "React 19 Course",
    Description: "Best React 19 course series 2024 master in front end development",
    Pricing: 0,
    Video: [],
    YouTubePlaylist:"https://youtube.com/playlist?list=PLwGdqUZWnOp1Rab71vx2zMF6qpwGDB2Z1&si=5R1sE76em-vyw90E",
  }]);

  const addCourse = (newCourse) => {
    setAllCourses((prevCourses) => [...prevCourses, newCourse]);
  };
  console.log("allcourse",AllCourses);

  return (
    <TeacherPortalContext.Provider value={{ AllCourses, addCourse }}>
      {children}
    </TeacherPortalContext.Provider>
  );
};
