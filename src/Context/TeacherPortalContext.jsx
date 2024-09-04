import { createContext, useState } from "react";

export const TeacherPortalContext = createContext();

export const TeacherProvider = ({ children }) => {
  const [AllCourses, setAllCourses] = useState([]);

  const addCourse = (course) => {
    setAllCourses([...AllCourses, course]);
  };

  const deleteCourse = (courseToDelete) => {
    setAllCourses(AllCourses.filter(course => course !== courseToDelete));
  };

  return (
    <TeacherPortalContext.Provider value={{ AllCourses, addCourse, deleteCourse }}>
      {children}
    </TeacherPortalContext.Provider>
  );
};
