import Icons from "@/components/shared/icons";
import { SortByTypes, SortOrderTypes } from "@/lib/types/tweets.types";
import { cn } from "@/utils/tailwind";

const addAtLinks = (tweet, darkMode) => {
  // Replace all @ links
  const regex = /@\w+/g; // This is a regular expression that matches Twitter mentions (starts with @ followed by one or more word characters)
  const findFor = tweet.match(regex);
  if (!findFor) return tweet;
  const replaceWith = findFor.map(
    (_) =>
      `<a style="color:${
        darkMode ? "#00fa" : "#00f"
      };" href="https://twitter.com/${_.slice(1)}" target="_blank">${_}</a>`,
  );

  const originalString = tweet;

  let modifiedString = originalString;

  findFor.forEach(
    (tag, i) =>
      (modifiedString = modifiedString.replace(
        new RegExp(tag, "g"),
        replaceWith[i],
      )),
  );
  return `${modifiedString}`;
};

const addLinks = (tweet, darkMode) => {
  // Replace all @ links
  const regex = /https:\/\/[^\s]+/g; // This is a regular expression that matches Twitter mentions (starts with @ followed by one or more word characters)
  const findFor = tweet.match(regex);
  if (!findFor) return tweet;
  const replaceWith = findFor.map(
    (_) =>
      `<a style="color:${
        darkMode ? "#00fa" : "#00fa"
      };" href="${_}" target="_blank">${_}</a>`,
  );

  const originalString = tweet;

  let modifiedString = originalString;

  findFor.forEach(
    (tag, i) =>
      (modifiedString = modifiedString.replace(
        new RegExp(tag, "g"),
        replaceWith[i],
      )),
  );
  return `${modifiedString}`;
};

const TweetBlock = ({ tweet, darkMode = false }) => {
  let highlightedTweet = addLinks(tweet?.tweet, darkMode);
  highlightedTweet = addAtLinks(highlightedTweet, darkMode);

  return (
    <>
      <div
        className={cn("min-w-[16rem]", darkMode && "text-[#fff] invert")}
        dangerouslySetInnerHTML={{ __html: `${highlightedTweet}` }}
      ></div>
    </>
  );
};

const Th = ({
  children,
  className,
  type,
  handleClick,
  enableSort,
  sortBy,
  sortOrder,
}: {
  children: React.ReactNode;
  className?: string;
  type?: string;
  handleClick?: () => void;
  enableSort?: boolean;
  sortBy?: SortByTypes;
  sortOrder?: SortOrderTypes;
}) => {
  let isSorted = sortBy == type;

  return (
    <>
      <th
        className={cn(
          "sticky",
          "border-silver border-r border-b",
          "px-2 py-2",
          "z-10",
          "top-0",
          "text-left",
          "after:absolute after:left-0 after:top-0 after:z-0 after:h-full after:w-full after:bg-gray-100 after:content-['']",
          className,
        )}
      >
        <div className="flex w-fit flex-row items-center">
          <span className="z-10 w-fit">{children}</span>
          {enableSort && (
            <Icons
              type={isSorted ? sortOrder : SortOrderTypes.UNSORTED}
              selected={isSorted}
              handleClick={handleClick}
            />
          )}
        </div>
      </th>
    </>
  );
};

const Td = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <td
      className={cn(
        "bg-white-500",
        "border-silver border-r border-b",
        "px-2 py-2",
        "text-left text-sm",
        "first:border-silver first:border-t",
        className,
      )}
    >
      {children}
    </td>
  );
};

const Table = ({
  data,
  tableConfig,
  sortBy,
  sortOrder,
  handleSort,
}: {
  data: Record<string, any>[];
  tableConfig: any;
  sortBy?: SortByTypes;
  sortOrder?: SortOrderTypes;
  handleSort?: ({ sortBy }: { sortBy: SortByTypes }) => void;
}) => {
  const _handleClick = (type) => {
    handleSort({ sortBy: type });
  };

  return (
    <table className={cn("border-silver w-full border-x border-b")}>
      <thead>
        <tr>
          {tableConfig.map((config) => (
            <Th
              type={config?.id}
              enableSort={config?.sort}
              sortBy={sortBy}
              sortOrder={sortOrder}
              handleClick={() => _handleClick(config?.id)}
            >
              {config?.thComponent ? config?.thComponent() : config.name}
            </Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((d) => (
          <tr key={d?.id}>
            {tableConfig.map((table) => (
              <Td>{table?.tdComponent(d)}</Td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TweetBlock, Th, Td, Table };
