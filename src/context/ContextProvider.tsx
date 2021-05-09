import React, { ReactElement } from "react";
import { loadVideos } from "../functions";
import { Match, PageStatus } from "../utils/types";

interface Props {
  children: any;
}
const Context = React.createContext({});
export function ContextProvider({ children }: Props): ReactElement {
  const [matches, setmatches] = React.useState<Array<Match>>([]);
  const [pageStatus, setpageStatus] = React.useState<PageStatus>();
  const [loading, setloading] = React.useState(false);

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

  return (
    <Context.Provider
      value={{ appName: "FtVid", matches, pageStatus, loadNextPage }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
