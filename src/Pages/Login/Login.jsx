import React, { useContext, useState } from 'react';
import { LoginSignupContext } from "../../Context/LoginSignupContext";
import Navbar from '../../Components/Navbar/Navbar';
import loginIllus from "../../assets/loginIllus.png"
import { ThemeContext } from '../../Context/ThemeContext';
import 'remixicon/fonts/remixicon.css';
import { Link, Navigate } from 'react-router-dom';


const Login = () => {
  const { theme } = useContext(ThemeContext)

  const [showPassword, setShowPassword] = useState(false);
  const { LoginData, HandleOnChangeLogin, HandleLoginForm } = useContext(LoginSignupContext)
  return (
    <>
      <Navbar />
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center justify-center mt-9  gap-5 '>
        <div className=' hidden sm:flex   items-center justify-center'>
          <img src={loginIllus} className='w-96 ' alt="" />
        </div>
        <div className={`  ${theme === "light" ? "bg-cyan-50 border" : "bg-[#262626] border border-cyan-200"} py-9 px-16 rounded-s-3xl group`}>
          <h1 className="text-center text-3xl outfit font-medium p-2">Welcome Back!</h1>
          <p className='raleway font-medium text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, eligendi.</p>

          <form onSubmit={HandleLoginForm} className='flex flex-col gap-6 mt-6'>

            <input
              type="email"
              placeholder="Enter Email"
              required
              name="email"
              value={LoginData.email}
              onChange={HandleOnChangeLogin}
              className={`py-3 px-4 border outline-none rounded-lg ${theme === "light" ? "text-black" : "text-black"}`}
            />
            <div className='relative w-full '>
              
            <input
  type={`${showPassword ? "text" : "password"}`}
  placeholder="Enter Password"
  required
  name="password"
  value={LoginData.password}
  onChange={HandleOnChangeLogin}
  className={`w-full py-3 px-4 border outline-none rounded-lg ${theme === "light" ? "text-black" : "text-black"}`}
/>

              <i
                onClick={() => setShowPassword(prev => !prev)}
                className={` ${theme === "light" ? "text-black" : "text-black"} absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer ${showPassword ? "ri-eye-off-line" : "ri-eye-line"} text-xl`}
              />
            </div>
            <button type="submit" className='px-7 py-2 bg-transparent flex justify-center gap-1 text-center text-lg border border-[#90C8F7] rounded-md transition duration-300 hover:bg-[#90C8F7] hover:text-white'
            >Login
              <i className="ri-lock-unlock-line"></i>
            </button>
            <Link className='text-center underline' to={"/signup"}>don't Have an account?</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
