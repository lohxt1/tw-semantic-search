import create from "zustand";

interface SearchStore {
  _results: any;
  results: any;
  excludeReplies: boolean;
  tweetLengthLimit: any;
  setResults: (val: any) => void;
  setTweetLimit: (val: any) => void;
  toggleExcludeReplies: () => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  _results: null,
  results: null,
  excludeReplies: true,
  tweetLengthLimit: 15,
  setResults: (val) =>
    set((state) => {
      let filtered = val
        ?.filter((v) => v?.tweet?.length > state?.tweetLengthLimit)
        .filter((v) =>
          state?.excludeReplies ? v?.reply_to?.length <= 0 : true,
        );
      return {
        _results: val,
        results: filtered,
      };
    }),
  setTweetLimit: (val) =>
    set((state) => {
      let filtered = state?._results
        ?.filter((result) => result?.tweet?.length > parseInt(val))
        .filter((result) =>
          state?.excludeReplies ? result?.reply_to?.length <= 0 : true,
        );
      return {
        tweetLengthLimit: val,
        results: filtered,
      };
    }),
  toggleExcludeReplies: () =>
    set((state) => {
      let filtered = state?._results
        ?.filter(
          (result) => result?.tweet?.length > parseInt(state?.tweetLengthLimit),
        )
        .filter((result) =>
          !state?.excludeReplies ? result?.reply_to?.length <= 0 : true,
        );
      return {
        excludeReplies: !state?.excludeReplies,
        results: filtered,
      };
    }),
}));

export default useSearchStore;
