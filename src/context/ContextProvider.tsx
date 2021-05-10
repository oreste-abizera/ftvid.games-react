import React, { ReactElement } from "react";
import { useHistory } from "react-router";
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
  const [searching, setsearching] = React.useState(false);
  const [searchKey, setSearchKey] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<Array<Match>>([]);

  const history = useHistory();

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
    history.push("/search");
    setsearching(true);
    let tempSearchedResults = await loadSearchedVideos(searchKey);
    setSearchResults(tempSearchedResults);

    //push recent to local storage
    let suggestions = localStorage.getItem("suggestions");
    let tempSuggestions = suggestions ? JSON.parse(suggestions) : [];
    tempSuggestions.push(searchKey);
    localStorage.setItem("suggestions", JSON.stringify(tempSuggestions));
    setsearching(false);
  };

  const searchRecent = async (searchTerm: string) => {
    history.push("/search");
    setsearching(true);
    let tempSearchedResults = await loadSearchedVideos(searchTerm);
    setSearchResults(tempSearchedResults);
    setSearchKey(searchTerm);
    setsearching(false);
  };

  return (
    <Context.Provider
      value={{
        appName: "FtVid",
        matches,
        pageStatus,
        searchKey,
        searchResults,
        loading,
        searching,
        handleSearchKey,
        search,
        searchRecent,
        loadNextPage,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
