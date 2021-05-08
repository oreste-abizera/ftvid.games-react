import React, { ReactElement } from "react";

interface Props {
  children: any;
}
const Context = React.createContext({});
export function ContextProvider({ children }: Props): ReactElement {
  return (
    <Context.Provider value={{ appName: "FtVid" }}>{children}</Context.Provider>
  );
}

export default Context;
