import { NextPage } from "next";
import Script from "next/script";
import SearchHistory from "@/containers/searchHistory";
import SearchInput from "@/containers/searchInput";
import SearchOptions from "@/containers/searchOptions";
import SearchResults from "@/containers/searchResults";
import { cn } from "@/utils/tailwind";

const Home: NextPage = () => {
  return (
    <div className={cn("flex h-[calc(100vh_-_3.6rem)] w-screen flex-row")}>
      <div className="w-full">
        <SearchInput />
        <SearchOptions />
        <SearchResults />
      </div>
      <div className="hidden w-[0px] max-w-[20rem] border-l border-gray-300 md:block md:w-[30%]">
        <SearchHistory />
      </div>
    </div>
  );
};

export default Home;
