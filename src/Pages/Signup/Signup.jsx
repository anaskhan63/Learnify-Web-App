import React, { useContext, useState } from 'react';
import { LoginSignupContext } from "../../Context/LoginSignupContext";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import loginIllus from "../../assets/loginIllus.png";
import { ThemeContext } from '../../Context/ThemeContext';
import { message } from 'antd';

const Signup = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = useState(false);
  const { handleOnChangeSignup, handleSignupForm, signupData } = useContext(LoginSignupContext);

  const handleSubmit = (e) => {
    handleSignupForm(e);
    setTimeout(() => {
      navigate("/login");
    }, 2000); 
  };

  return (
    <>
      <Navbar />
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center justify-center mt-9 gap-5'>
        <div>
          <div className='hidden sm:flex items-center justify-center'>
            <img src={loginIllus} className='w-96' alt="" />
          </div>
        </div>
        <div className={` ${theme === "light" ? "bg-cyan-50 border" : "bg-[#262626] border border-cyan-200"} py-9 px-16 rounded-s-3xl group`}>
          <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className={`py-3 px-4 border outline-none rounded-lg ${theme === "light" ? "text-black" : "text-black"}`}
              required
              value={signupData.name}
              onChange={handleOnChangeSignup}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className={`py-3 px-4 border outline-none rounded-lg ${theme === "light" ? "text-black" : "text-black"}`}
              required
              value={signupData.email}
              onChange={handleOnChangeSignup}
            />
            <select
              name="role"
              className={`py-3 px-4 border outline-none rounded-lg ${theme === "light" ? "text-black" : "text-black"}`}
              required
              value={signupData.role}
              onChange={handleOnChangeSignup}
            >
              <option value="" disabled>Select Role</option>
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
            </select>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                className={`w-full py-3 px-4 border outline-none rounded-lg ${theme === "light" ? "text-black" : "text-black"}`}
                required
                value={signupData.password}
                onChange={handleOnChangeSignup}
              />
              <i
                onClick={() => setShowPassword(prev => !prev)}
                className={` ${theme === "light" ? "text-black" : "text-black"} absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${showPassword ? "ri-eye-off-line" : "ri-eye-line"} text-xl`}
              />
            </div>
            <button type="submit" className='px-7 py-2 bg-transparent flex justify-center gap-1 text-center text-lg border border-[#90C8F7] rounded-md transition duration-300 hover:bg-[#90C8F7] hover:text-white'>
              Register
              <i className="ri-user-add-line"></i>
            </button>
            <Link className='text-center underline' to={"/login"}>Already Have an account?</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
