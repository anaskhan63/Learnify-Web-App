import { message } from "antd";
import Password from "antd/es/input/Password";
import { createContext, useState } from "react";

export const LoginSignupContext = createContext();

export const LoginSignupProvider = ({ children }) => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    role: "",
    password: ""
  });

  const [LoginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  // Signup func
  const handleOnChangeSignup = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignupForm = (e, navigate) => {
    e.preventDefault();
    message.success(`Account Created Successfully for ${signupData.name}`);
    message.loading('Redirecting to login')
 
    console.log(signupData);
  };
  // LoginFunc

  const HandleOnChangeLogin = (e) => {
    const { name, value } = e.target
    setLoginData((prev) => ({
      ...prev, [name]: value
    }));
  };

  const HandleLoginForm = (e) => {
    e.preventDefault();
    if (signupData.email === LoginData.email && signupData.password === LoginData.password) {
      message.success(`Welcome ${signupData.name}`);
    } else {
      message.error("User not found, please create an account first");
    }
  };
  
  return (
    <LoginSignupContext.Provider value={{
      handleOnChangeSignup,
      handleSignupForm,
      signupData,
      LoginData,
      HandleOnChangeLogin,
      HandleLoginForm
    }}>
      {children}
    </LoginSignupContext.Provider>
  );
};
