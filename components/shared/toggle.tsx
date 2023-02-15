import { useState } from "react";
import { cn } from "@/utils/tailwind";

const Toggle = ({ label, value: _value, handleChange = (val) => {} }) => {
  const [state, toggleState] = useState(_value);

  const _handleChange = (e) => {
    e.preventDefault();
    handleChange(!state);
    toggleState(!state);
  };

  return (
    <div
      className={cn("mr-4 flex flex-row items-center justify-center text-sm")}
    >
      <label>{label}</label>
      <div
        className="relative ml-2 h-[20px] w-[35px] cursor-pointer rounded-full border border-gray-900"
        onClick={_handleChange}
      >
        <div
          className={cn(
            "absolute h-[18px] w-[18px] rounded-full",
            state && "right-0",
            state ? "bg-blue-600" : "bg-gray-400",
          )}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
