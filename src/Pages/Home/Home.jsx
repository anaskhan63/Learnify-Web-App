import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import Navbar from "../../Components/Navbar/Navbar";
import MainSection from "../../Components/MainSection/MainSection";
import { Modal, Button } from "antd";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Navbar />
      <MainSection />
      
      <Modal
        title="Welcome to Our Web App!"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk}>
            Got it!
          </Button>,
        ]}
      >
        <p>Welcome to our <strong>Learnify Web Application!</strong> designed to enhance your learning experience!</p>
        <p>
          This app features two main portals:
        </p>
        <ul>
          <li>
            <strong>Teacher Portal</strong>: Teachers can <strong>upload courses</strong> and manage their content. They can also view their <strong>previous and new courses</strong>. 
          </li>
          <li>
            <strong>Student Portal</strong>: Students can <strong>browse and watch courses</strong>, both <strong>paid and free</strong>.
          </li>
        </ul>
        <p>
          The application leverages <strong>Context API</strong> for <strong>state management</strong>, ensuring smooth data flow and state handling across different components. 
          This approach strengthens the <strong>concept of context</strong> and state management in the app.
        </p>
        <p>
          Key technologies used include <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Ant Design</strong> for a responsive and modern user interface.
        </p>
        <p>
          The <strong>login and signup functionalities</strong> are also managed through state management, integrating seamlessly with the rest of the app.
        </p>
        <p>
          We hope you find this platform useful for both teaching and learning. Enjoy exploring the features!
        </p>
      </Modal>
    </>
  );
};

export default Home;
