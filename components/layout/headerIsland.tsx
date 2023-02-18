import Router from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { signOut, useSession } from "next-auth/react";
import { useModeStore } from "stores/modeStore";
import { useUserStore } from "stores/userStore";
import { cn } from "utils/tailwind";
import LoadingDots from "../shared/loadingDots";

const HeaderIsland: React.FC = () => {
  // const { data: session, status } = useSession();

  const { toggleMode, darkMode } = useModeStore();

  const { userId, setUserId } = useUserStore();

  useEffect(() => {
    if (!userId) {
      setUserId(nanoid());
    }
  }, []);

  const _handleModeClick = (e) => {
    e.preventDefault();
    toggleMode();
  };

  return (
    <nav
      className={cn(
        "align-center flex w-full items-center justify-between",
        "border-b border-gray-300",
        "px-2 md:px-0",
      )}
    >
      <div
        className={cn(
          "align-center flex w-full items-center justify-between",
          "sm:px-2",
          // "border-silver border-b",
        )}
      >
        <div className="flex h-14 w-fit items-center justify-between align-middle">
          <div>
            <label className={cn("text-sm font-light")}>twitter</label>-
            <label className={cn("text-lg font-bold")}>Semantic</label>-
            <label className={cn("text-lg font-bold")}>Search</label>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`→`}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label className={cn("text-sm", "underline decoration-dashed")}>
            Elon Musk
          </label>
        </div>
        <div
          className={cn(
            "flex h-14 w-fit items-center justify-between align-middle",
          )}
        >
          <div
            className={cn(
              "flex w-full items-center justify-between align-middle",
              " px-2",
              "font-medium",
            )}
          >
            <div className={cn("flex items-center")}>
              {/* <label className={cn("text-sm")}>Hello,&nbsp;</label> */}
              {/* <label className={cn("text-sm", "underline decoration-dashed")}>
                stranger
              </label> */}
            </div>
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className={cn(
              "flex h-9 w-14 items-center justify-center",
              // "bg-gray-200",
              "rounded-lg",
              "border-silver border",
              "transition-all",
            )}
            onClick={_handleModeClick}
          >
            {!darkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      <style jsx global>
        {`
          html {
            filter: invert(${darkMode ? 1 : 0});
          }
        `}
      </style>
    </nav>
  );
};

export default HeaderIsland;
