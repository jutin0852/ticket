import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant = "primary", ...props }: ButtonProps) {
  const styles = {
    primary: "bg-[#24A0B5] text-white",
    outline: "border border-solid border-[#24A0B5] text-[#24A0B5]",
  };

  return (
    <button
      {...props}
      className={`${styles[variant]} w-full p-3 rounded-md text-center`}
    >
      {children}
    </button>
  );
}
