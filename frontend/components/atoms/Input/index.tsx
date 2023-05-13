import React, { ChangeEvent } from "react";

interface InputProps {
  id: string;
  label: string;
  value: string;
  setter?: (value: string) => void;
  type?: "text" | "email" | "password";
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  setter,
  type = "text",
  placeholder = "",
  disabled = false,
  className = "",
}) => {
  return (
    <div className="first-letter:">
      <label htmlFor={id} className="my-10 text-gray-500">
        {label}
      </label>
      <input
        id={id}
        className={` ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          if (!setter) return;
          setter(event.target.value);
        }}
        disabled={disabled}
      />
    </div>
  );
};
