import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large" | "fab";
  disable?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  children,
  onClick,
  size,
  disable,
  type,
}: ButtonProps) => {
  // handle size
  let sizeClass = "";
  switch (size) {
    case "small":
      sizeClass = "px-2 py-1 text-xs rounded-[12px]";
      break;
    case "medium":
      sizeClass = "px-4 py-2 text-sm rounded-[12px]";
      break;
    case "large":
      sizeClass = "px-6 py-4 text-[14.06px] w-full rounded-[12px]";
      break;
    case "fab":
      sizeClass = "px-6 py-3 text-[14.06px] rounded-full";
      break;
    default:
      sizeClass = "px-4 py-2 text-sm";
      break;
  }

  return (
    <button
      className={`bg-brandBlack hover:bg-black shadow-black text-white font-bold ${sizeClass}`}
      disabled={disable}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
