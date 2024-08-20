import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const TeacherPortal = () => {
  
  
  return (
    <>
      <Navbar />
      <form onSubmit={HandleTeacherCourseDataSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={TeacherCourse.name}
          onChange={handleCourseData}
          required
        />
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          required
          multiple
        />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default TeacherPortal;
