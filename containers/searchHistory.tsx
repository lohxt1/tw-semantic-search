import { useUserStore } from "stores/userStore";
import useSWR from "swr";
import SearchHistoryRoot from "@/components/searchHistory";
import { HISTORYPATH } from "@/lib/constants";
import fetcher from "@/utils/fetcher";

const SearchHistory = () => {
  const { userId } = useUserStore();

  const { data, isLoading } = useSWR(
    `${HISTORYPATH}?userId=${userId}`,
    fetcher,
  );

  console.log(data);

  return <SearchHistoryRoot data={data} isLoading={isLoading} />;
};

export default SearchHistory;
