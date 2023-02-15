import useSearchStore from "stores/searchStore";
import SearchOptionsRoot from "@/components/searchOptions";
import Slider from "@/components/shared/slider";
import Toggle from "@/components/shared/toggle";

const SearchOptions = () => {
  const {
    setTweetLimit,
    toggleExcludeReplies,
    excludeReplies,
    tweetLengthLimit,
  } = useSearchStore();

  const _handleToggleChange = () => {
    toggleExcludeReplies();
  };

  const _handleSliderChange = (val) => {
    setTweetLimit(val);
  };

  return (
    <SearchOptionsRoot>
      <div className="mr-4 hidden h-[3rem] w-[2px] bg-gray-200 md:block"></div>
      <Toggle
        label={"Replies"}
        handleChange={_handleToggleChange}
        value={!excludeReplies}
      />
      <div className="mr-4 h-[3rem] w-[2px] bg-gray-200"></div>
      <Slider
        label={"Min. Tweet size"}
        handleChange={_handleSliderChange}
        value={tweetLengthLimit}
      />
      <div className="mr-4 hidden h-[3rem] w-[2px] bg-gray-200 md:block"></div>
    </SearchOptionsRoot>
  );
};

export default SearchOptions;
