import { useState } from "react";
import { nanoid } from "nanoid";
import { useSession } from "next-auth/react";
import useSearchStore from "stores/searchStore";
import { useUserStore } from "stores/userStore";
import useSWR from "swr";
import SearchInputRoot from "@/components/searchInput";
import { SEARCHPATH } from "@/lib/constants";
import fetcher from "@/utils/fetcher";

const SearchInput = () => {
  const { tweetLengthLimit, excludeReplies, setResults } = useSearchStore();
  const { userId } = useUserStore();
  const [isLoading, toggleLoading] = useState(false);

  const _handleSubmit = async (text) => {
    if (text.trim().length <= 0) return;

    let newSearch = {
      id: nanoid(),
      query: text,
      userId,
      tweetLengthLimit,
      excludeReplies,
    };

    toggleLoading(true);

    try {
      const response = await fetch(SEARCHPATH, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSearch),
      }).then((res) => res.json());

      setResults(response?.data);
      toggleLoading(false);
    } catch (e) {
      // If the API errors, the original data will be
      // rolled back by SWR automatically.
      console.log(e);
    }
  };

  return <SearchInputRoot handleSubmit={_handleSubmit} loading={isLoading} />;
};

export default SearchInput;
