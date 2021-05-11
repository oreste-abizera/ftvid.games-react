import { ReactElement, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import NotFoundComponent from "../components/NotFoundComponent";
import { VideoDisplay } from "../components/SingleVideoPage/VideoDisplay";
import Context from "../context/ContextProvider";
import { loadVideo } from "../functions";
import { Match } from "../utils/types";

export default function SingleVideoPage(props: any): ReactElement {
  const contextData: any = useContext(Context);
  const matches: Array<Match> = contextData.matches;
  const [currentMatch, setcurrentMatch] = useState<Match>();
  const [isloading, setisloading] = useState(false);
  const { clearSearch } = contextData;

  useEffect(() => {
    clearSearch();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    async function init() {
      setisloading(true);
      const { id } = props.match.params;
      let tempMatches = matches || [];
      let tempCurrentMatch = tempMatches.find((match) => match._id === id);
      if (tempCurrentMatch) {
        setcurrentMatch(tempCurrentMatch);
      } else {
        //load match details from backend
        setcurrentMatch(await loadVideo(id));
      }
      setisloading(false);
    }
    init();
  }, [matches, props.match.params]);

  return (
    <SingleVideoPageWrapper>
      <Navbar></Navbar>
      {isloading ? (
        <Loader></Loader>
      ) : (
        <>
          {currentMatch ? (
            <VideoDisplay match={currentMatch}></VideoDisplay>
          ) : (
            <NotFoundComponent text="Match not found"></NotFoundComponent>
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
