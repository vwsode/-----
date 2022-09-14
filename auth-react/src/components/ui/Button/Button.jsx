import React from 'react';

const Button = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="py-2 px-5 hover:bg-gray-800 duration-200 transition-colors rounded-sm active:bg-gray-900"
    >
      {title}
    </button>
  );
};

export default Button;
