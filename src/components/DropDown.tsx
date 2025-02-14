"use client";

import { useState, useRef, useEffect } from "react";

type DropdownProps = {
  options: string[];
  onSelect: (option: string) => void;
  placeholder?: string;
};

export default function Dropdown({
  options,
  onSelect,
  placeholder = "1",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative border border-solid border-[#07373F] rounded-md"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left p-3">
        {selected || placeholder}
      </button>
      {isOpen && (
        <ul className="absolute  border border-solid border-[#07373F] w-full mt-1 bg-white  shadow-md">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="p-2 cursor-pointer  bg-[#08252B]  hover:bg-[#07373F]"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
