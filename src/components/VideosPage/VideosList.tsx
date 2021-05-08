import React, { ReactElement } from "react";
import styled from "styled-components";
import Context from "../../context/ContextProvider";
import { timeAgo } from "../../utils/helperFunctions";
import { Match } from "../../utils/types";

export default function VideosList(): ReactElement {
  const contextData: any = React.useContext(Context);
  let matches: Array<Match> = contextData.matches;
  return (
    <VideosListWrapper>
      {matches.map((match) => (
        <div className="match" key={match._id}>
          <img src={match.thumbnail} alt={match.title}></img>
          <p className="title">{match.title}</p>
          <p>{timeAgo(match.date)}</p>
        </div>
      ))}
    </VideosListWrapper>
  );
}

const VideosListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 1rem;

  .match {
    width: 30%;
    margin: 1rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  }

  .match img {
    width: 100%;
    height: 16rem;
  }

  .match > .title {
    margin-top: 0.4rem;
    font-weight: 700;
  }

  @media screen and (max-width: 692px) {
    justify-content: center;
    .match {
      width: 90%;
    }
  }
  @media screen and (max-width: 768px) and (min-width: 692px) {
    .match {
      width: 40%;
    }
  }
`;
