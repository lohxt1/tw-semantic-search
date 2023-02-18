import { useModeStore } from "stores/modeStore";
import { compactForm, formatTimeAgo } from "@/utils/helpers";
import { cn } from "@/utils/tailwind";
import { Table, TweetBlock } from "./tableElements";
import TwitterTweetEmbed from "./tweetEmbed";

const SearchResultsRoot = ({ results: tweets, darkMode, areResultsEmpty }) => {
  const tableConfig = [
    {
      id: "time",
      name: "Time",
      tdComponent: (data) => (
        <div className="flex min-w-[10rem] flex-col py-2 px-2">
          <label>{formatTimeAgo(data?.created_at)}</label>
          <label className="text-[0.7rem] opacity-50">
            {new Date(data?.created_at).toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </label>
        </div>
      ),
    },
    {
      id: "tweet",
      name: "Tweets",
      tdComponent: (data) => <TweetBlock tweet={data} darkMode={darkMode} />,
    },
    {
      id: "similarity",
      name: "Similarity",
      tdComponent: (data) => (
        <div className="py-2 px-2">{data?.similarities.toFixed(2)}</div>
      ),
    },
    {
      id: "likes",
      name: "Likes",
      tdComponent: (data) => (
        <div className="py-2 px-2">{compactForm(data?.nlikes)}</div>
      ),
    },
    {
      id: "replies",
      name: "Replies",
      tdComponent: (data) => (
        <div className="py-2 px-2">{compactForm(data?.nreplies)}</div>
      ),
    },
    {
      id: "retweets",
      name: "Retweets",
      tdComponent: (data) => (
        <div className="py-2 px-2">{compactForm(data?.nretweets)}</div>
      ),
    },
    {
      id: "link",
      name: "Link",
      tdComponent: (data) => (
        <a
          href={data?.link}
          target={"_blank"}
          rel={"noreferrer"}
          style={{ color: darkMode ? "#0f0" : "#00f" }}
        >
          ↗
        </a>
      ),
    },
  ];

  return (
    <div className="flex h-[calc(100vh_-_10rem)] w-full flex-col overflow-scroll">
      {tweets?.length > 0 ? (
        <Table tableConfig={tableConfig} data={tweets} />
      ) : (
        <div
          className={cn(
            "flex h-full w-full content-center items-center justify-center",
          )}
        >
          {areResultsEmpty
            ? "Wow! so empty"
            : "Try decreasing the tweet length limit or Turn on Replies"}
        </div>
      )}
    </div>
  );
};

export default SearchResultsRoot;
