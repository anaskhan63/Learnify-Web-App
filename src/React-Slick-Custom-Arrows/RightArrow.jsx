import React, { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "2px",  }}
      onClick={onClick}
    />
  );
};

export default RightArrow;