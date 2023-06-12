"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  lable: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  error?: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  lable,
  type,
  disabled,
  formatPrice,
  error,
  required,
  register,
}) => {
  return (
    <div
      className="w-full relative -space-y-1 "
      {...(formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      ))}
    >
      <input
        type={type || "text"}
        id={id}
        disabled={disabled}
        {...(register && register(id, { required }))}
        placeholder=" "
        className={`text-black peer w-full font-light p-4 pt-6 bg-white border-2 rouded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
        ${formatPrice ? "pl-9" : "pl-4"}
        ${error && error[id] ? "border-red-500" : "border-neutral-300"}
        ${error && error[id] ? "focus:border-red-500" : "focus:border-black"}
        
        `}
      />
      <label
        className={`absolute text-mx duration-100 transform -translate-y-3 top-5 z-10 origin-0 ${
          formatPrice ? "left-9" : "left-3"
        }
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-4
        peer-focus:-translate-x-2
        ${error && error[id] ? "text-rose-500" : "text-zinc-500"}
        `}
      >
        {lable}
      </label>
    </div>
  );
};

export default Input;
