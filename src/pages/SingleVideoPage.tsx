import { ReactElement, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import NotFoundComponent from "../components/NotFoundComponent";
import { SEO } from "../components/SEO";
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
        <>
          <SEO
            title="FtVid | Loading: loading match videos."
            description="Loading: loading match videos."
          ></SEO>
          <Loader></Loader>
        </>
      ) : (
        <>
          {currentMatch ? (
            <>
              <SEO
                title={`${currentMatch.side1} vs ${currentMatch.side2} | ${currentMatch.competition.name}.`}
                description={`${currentMatch.side1.name} vs ${currentMatch.side2.name} | ${currentMatch.competition.name}.Played at ${currentMatch.date}.`}
              ></SEO>
              <VideoDisplay match={currentMatch}></VideoDisplay>
            </>
          ) : (
            <>
              <SEO
                title="FtVid | Error: Match not found."
                description="Error | Match not found."
              ></SEO>
              <NotFoundComponent text="Match not found"></NotFoundComponent>
            </>
          )}
        </>
      )}
    </SingleVideoPageWrapper>
  );
}

const SingleVideoPageWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
`;
