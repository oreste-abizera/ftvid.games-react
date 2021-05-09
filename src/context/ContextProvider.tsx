import React, { ReactElement } from "react";
import { loadSearchedVideos, loadVideos } from "../functions";
import { Match, PageStatus } from "../utils/types";

interface Props {
  children: any;
}
const Context = React.createContext({});
export function ContextProvider({ children }: Props): ReactElement {
  const [matches, setmatches] = React.useState<Array<Match>>([]);
  const [pageStatus, setpageStatus] = React.useState<PageStatus>();
  const [loading, setloading] = React.useState(false);
  const [searchKey, setSearchKey] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<Array<Match>>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      let tempMatches = await loadVideos(1);
      let tempPageStatus = { ...tempMatches };
      delete tempPageStatus.docs;
      setmatches(tempMatches.docs);
      setpageStatus(tempPageStatus);
      setloading(false);
    };
    fetchData();
  }, []);

  async function loadNextPage() {
    if (!loading) {
      if (pageStatus?.hasNextPage) {
        setloading(true);
        let tempMatches = await loadVideos(pageStatus.nextPage);
        let tempPageStatus = { ...tempMatches };
        delete tempPageStatus.docs;
        setmatches([...new Set([...matches, ...tempMatches.docs])]);
        setpageStatus(tempPageStatus);
        setloading(false);
      }
    }
  }

  const handleSearchKey = (e: any) => {
    setSearchKey(e.target.value);
  };

  const search = async (e: any) => {
    e.preventDefault();
    if (!searchKey) {
      alert("Enter text to search");
      return;
    }
    let tempSearchedResults = await loadSearchedVideos(searchKey);
    console.log(searchKey, tempSearchedResults);
  };

  return (
    <Context.Provider
      value={{
        appName: "FtVid",
        matches,
        pageStatus,
        searchKey,
        searchResults,
        handleSearchKey,
        search,
        loadNextPage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
