import { message } from "antd";
import { createContext, useContext, useState } from "react";

export const TeacherPortalContext = createContext();

export const TeacherProvider = ({ children }) => {


  
  return <TeacherPortalContext.Provider >
    {children}
  </TeacherPortalContext.Provider>
}