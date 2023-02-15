import { useModeStore } from "stores/modeStore";
import useSearchStore from "stores/searchStore";
import SearchResultsRoot from "@/components/searchResults";

const SearchResults = () => {
  const { results, _results } = useSearchStore((state) => state);
  const { darkMode } = useModeStore((state) => state);

  return (
    <SearchResultsRoot
      results={results}
      darkMode={darkMode}
      areResultsEmpty={!Boolean(_results?.length)}
    />
  );
};

export default SearchResults;
