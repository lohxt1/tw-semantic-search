import { useState } from "react";
import { cn } from "@/utils/tailwind";

const Slider = ({ value: _value, label, handleChange }) => {
  const [value, setValue] = useState(_value || 1);

  const _handleChange = (e) => {
    handleChange(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div
      className={cn(
        "mr-8 flex w-fit flex-row items-center justify-center text-sm",
      )}
    >
      <label
        className={cn("w-[6rem] min-w-[5.5rem] md:w-[17rem] md:min-w-[8.5rem]")}
      >
        {label}&nbsp;[{value}]
      </label>
      <input
        // className={cn("mr-2 w-[calc(100%)]", "cursor")}
        className="range-sm h-1 w-full cursor-pointer appearance-none rounded-lg bg-blue-200 dark:bg-blue-700"
        name="limit"
        value={value}
        onChange={_handleChange}
        type="range"
        min={1}
        max={280}
      />
    </div>
  );
};

export default Slider;
