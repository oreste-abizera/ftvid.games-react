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

  React.useEffect(() => {
    const fetchData = async () => {
      let tempMatches = await loadVideos(1);
      let tempPageStatus = { ...tempMatches };
      delete tempPageStatus.docs;
      setmatches(tempMatches.docs);
      setpageStatus(tempPageStatus);
    };
    fetchData();
  }, []);
  return (
    <Context.Provider value={{ appName: "FtVid", matches, pageStatus }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
