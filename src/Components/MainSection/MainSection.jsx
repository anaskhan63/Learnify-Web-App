import React, { useEffect, useState } from 'react'
import FeaturesCard from './FeaturesCard';

const MainSection = () => {
  const [color, setColor] = useState('text-[#90C8F7]');
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor(prevColor => prevColor === 'text-[#90C8F7]' ? 'text-[#47B135]' : 'text-[#90C8F7]');
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const features = [
    {
      title: 'Free and Paid Courses',
      description: 'Access a variety of courses available, including both free and paid options.',
      iconClass: 'ri-global-fill',
    },
    {
      title: 'Teacher Course Uploads',
      description: 'Teachers can easily add their courses on the platform.',
      iconClass: 'ri-presentation-line',
    },
    {
      title: 'Students Watch Courses',
      description: 'Students can watch and engage with the courses at their convenience.',
      iconClass: 'ri-video-fill',
    },
  ];

  return (
    <>
      <h1 className="text-center text-5xl mt-5 audiowide duration-300 animate-bounce p-4 sm:mt-4">Welcome to <span className={`${color}`}>Learnify</span></h1>
      <p className='text-center w-[90%] sm:w-[85%] md:w-[65%]   mx-auto raleway'>
        Introducing Learnify, the ultimate platform where teachers can upload their courses—both free and paid—and reach a wide audience. Students can explore a variety of courses to elevate their skills and knowledge. Join Learnify today and start your learning journey!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 w-[85%] mx-auto mt-5 p-4">
        {
          features.map((CurrElem, i) => {
            return < FeaturesCard key={i}
              Title={CurrElem.title}
              Description={CurrElem.description}
              Icon={CurrElem.iconClass}
            />
          })
        }
      </div>
    </>
  )
}

export default MainSection