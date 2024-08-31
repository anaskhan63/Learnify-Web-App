import { createContext, useState } from "react";

export const TeacherPortalContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [AllCourses, setAllCourses] = useState([{
    TeacherName: "",
    CourseName: "",
    Description: "",
    Pricing: "",
    Video: [],
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
