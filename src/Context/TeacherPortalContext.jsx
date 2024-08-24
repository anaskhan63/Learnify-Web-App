import { createContext, useState } from "react";

export const TeacherPortalContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [AllCourses, setAllCourses] = useState([]);

  const addCourse = (newCourse) => {
    setAllCourses((prevCourses) => [...prevCourses, newCourse]);
  };
  console.log(AllCourses);

  return (
    <TeacherPortalContext.Provider value={{ AllCourses, addCourse }}>
      {children}
    </TeacherPortalContext.Provider>
  );
};
