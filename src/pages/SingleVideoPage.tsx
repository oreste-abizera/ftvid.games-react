import { ReactElement, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { VideoDisplay } from "../components/SingleVideoPage/VideoDisplay";
import Context from "../context/ContextProvider";
import { Match } from "../utils/types";

export default function SingleVideoPage(props: any): ReactElement {
  const contextData: any = useContext(Context);
  const matches: Array<Match> = contextData.matches;
  const [currentMatch, setcurrentMatch] = useState<Match>();
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    setisloading(true);
    const { id } = props.match.params;
    let tempCurrentMatch = matches.find((match) => match._id === id);
    if (tempCurrentMatch) {
      setcurrentMatch(tempCurrentMatch);
    } else {
      //load match details from backend
      console.log("load from backend");
    }
    setisloading(false);
  }, [matches, props.match.params]);

  return (
    <SingleVideoPageWrapper>
      <Navbar></Navbar>
      {isloading ? (
        <div>loading...</div>
      ) : (
        <>
          {currentMatch ? (
            <VideoDisplay match={currentMatch}></VideoDisplay>
          ) : (
            <div>match not found</div>
          )}
        </>
      )}
    </SingleVideoPageWrapper>
  );
}

const SingleVideoPageWrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;
