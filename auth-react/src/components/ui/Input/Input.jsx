import React from 'react';

const Input = ({ title, error, ...props }) => {
  return (
    <label className="text-sm text-inherti">
      <span className="flex mb-2">{title}</span>
      <input
        className="outline-none bg-slate-900 rounded-[14px] bg-inherit w-full border-gray-300 text-inherit border-2 p-2 focus:border-gray-500 transition-colors duration-200"
        {...props}
      />
      <span>{error}</span>
    </label>
  );
};

export default Input;
