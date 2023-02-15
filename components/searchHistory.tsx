import { cn } from "@/utils/tailwind";
import LoadingDots from "./shared/loadingDots";

const SearchHistoryRoot = ({ data = [], isLoading }) => {
  return (
    <div className="flex h-full w-full flex-col content-center items-center justify-center">
      <div
        className={cn(
          "flex h-full w-full content-center items-center justify-center",
        )}
      >
        {isLoading ? (
          <LoadingDots />
        ) : data.length > 0 ? (
          <div className="align- flex w-full flex-col">
            <label className="flex h-10 flex-row items-center border-b border-gray-500 px-2 py-2 text-lg">
              History{" "}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M5.721 5.735A6.042 6.042 0 1 1 3.958 10a.625.625 0 0 0-1.25 0 7.292 7.292 0 1 0 2.127-5.147.63.63 0 0 0-.058.067L3.729 3.872a.417.417 0 0 0-.71.258l-.294 3.24a.417.417 0 0 0 .453.453l3.242-.295a.417.417 0 0 0 .256-.709L5.652 5.795a.631.631 0 0 0 .069-.06Z"
                  fill="#000"
                />
                <path
                  d="M10.625 5.833a.625.625 0 0 0-1.25 0V10a.625.625 0 0 0 .293.53l2.5 1.563a.625.625 0 1 0 .663-1.06l-2.207-1.379V5.833Z"
                  fill="#000"
                />
              </svg>
            </label>
            <div
              className={cn(
                "flex h-full h-[calc(100vh_-_6.5rem)] w-full flex-col overflow-scroll",
              )}
            >
              {data.reverse().map((_) => (
                <label className="relative border-b border-gray-300 py-2 px-2 text-sm">
                  {_.query}
                  <span className="absolute bottom-0 right-0 px-2 py-0">{`↩`}</span>
                </label>
              ))}
            </div>
          </div>
        ) : null}
      </div>
      {data.length <= 0 && (
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute opacity-5"
        >
          <path d="M13.248 84.537c4.64 29.876 30.639 52.938 61.752 52.938 34.377 0 62.502-28.125 62.502-62.485S109.377 12.498 75 12.498A62.485 62.485 0 0 0 25.002 37.5V12.498H12.518l-.02 43.752H56.25V43.752H36.252c8.75-11.25 23.138-18.75 38.764-18.75 27.483 0 49.984 22.5 49.984 49.988s-22.502 49.998-50 49.998c-24.233 0-44.561-17.468-49.05-40.452H13.248z" />
          <path d="M68.764 43.752v33.123l19.998 26.861 10-7.482L81.26 73.127V43.749" />
        </svg>
      )}
    </div>
  );
};

export default SearchHistoryRoot;
