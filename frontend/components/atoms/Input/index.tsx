import React, { ChangeEvent } from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

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
      <Field
        id={id}
        name={id}
        className={`${className}`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
