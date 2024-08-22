import { createContext, useState } from "react";

export const TeacherPortalContext = createContext();

export const TeacherProvider = ({ children }) => {

  const [Course, setCourse] = useState([{
    TeacherName: "",
    CourseName: "",
    Description: "",
    Pricing: "",
    Video: null,
  }]);

  // Example function to add a new course
  const addCourse = (newCourse) => {
    setCourse((prevCourses) => [...prevCourses, newCourse]);
  };
  

  return (
    <TeacherPortalContext.Provider value={{ Course, setCourse, addCourse }}>
      {children}
    </TeacherPortalContext.Provider>
  );
};
