import { useState } from "react";
import { cn } from "@/utils/tailwind";
import LoadingDots from "./shared/loadingDots";

const SearchInputRoot = ({
  handleSubmit,
  loading,
}: {
  handleSubmit: (text: string) => Promise<void>;
  loading: boolean;
}) => {
  const [text, setText] = useState("");

  const _handleSubmit = (e) => {
    e.preventDefault();
    // setText("");
    handleSubmit(text);
  };

  const _handleClick = (e) => {
    setText("");
  };

  return (
    <form
      onSubmit={_handleSubmit}
      className={cn(
        "relative flex w-full w-[-moz-available] w-[-webkit-fill-available] w-[fill-available] items-center border-b border-gray-200 bg-transparent",
      )}
    >
      <div
        // type="submit"
        className={cn(
          "flex items-center justify-center",
          "h-12 w-12",
          text.trim().length > 0 && "hover:border-gray-100 hover:text-gray-700",
          text.trim().length > 0 &&
            "peer-focus:border-gray-700 peer-focus:text-gray-700",
          "cursor-pointer",
          "inset-y-0 right-0",
          "border border-gray-100",
          "font-sans text-lg font-medium text-gray-700",
          text.trim().length <= 0 && "bg-[#fff5] text-gray-300",
          text.trim().length <= 0 && "cursor-not-allowed",
        )}
        onClick={_handleClick}
      >
        {loading ? (
          <LoadingDots />
        ) : text.trim().length > 0 ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.714 17.714 6.285 6.285zm0-11.429L6.285 17.714"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.142"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="#000"
              stroke-width="2"
              d="m15 15 7 7-7-7Zm-5.5 2a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
            />
          </svg>
        )}
      </div>
      <input
        placeholder="Are you a Democrat or a Republican ?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={cn(
          "h-12 w-full bg-transparent",
          " px-2",
          "focus:outline-none",
        )}
      />
    </form>
  );
};

export default SearchInputRoot;
