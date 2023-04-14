import React from "react";
import { FiGlobe } from "react-icons/fi";
const InputField = ({
  label,
  type,
  value,
  onChange,
  id,
  name,
  placeholder,
  Icon,
  className,
  ...props
}) => {
  return (
    <label className="text-color3">
      {label}
      <div className="flex items-center relative w-full">
        <input
          {...props}
          className={`${className} block bg-color6 py-2 px-4 outline-none w-full  placeholder:text-color3 `}
          type={type}
          id={id}
          onChange={onchange}
          name={name}
          placeholder={placeholder}
          value={value}
        />
        <span className="font-light border-l-2 border-black absolute right-1 pl-1 ">
          {!Icon ? <></> : <Icon size={25} />}
        </span>
      </div>
    </label>
  );
};

export default InputField;
