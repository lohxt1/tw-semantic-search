import { cn } from "@/utils/tailwind";

const SearchOptionsRoot = ({ children }) => {
  return (
    <form
      // onSubmit={_handleSubmit}
      className={cn(
        "p relative flex h-12 w-full w-[-moz-available] w-[-webkit-fill-available] w-[fill-available] items-center justify-center border-b border-gray-300",
      )}
    >
      {children}
    </form>
  );
};

export default SearchOptionsRoot;
