import React from "react";
import styled from "styled-components";
import { timeAgo } from "../../utils/helperFunctions";
import { Match } from "../../utils/types";

interface Props {
  match: Match;
}

export const VideoDisplay = ({ match }: Props) => {
  const { videos } = match;
  if (videos.length === 0) {
    return <div>no video found</div>;
  }
  const [firstVideo] = videos;
  return (
    <VideoDisplayWrapper>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: firstVideo.embed }}
          className="video__container"
        ></div>
        <h4>{`${match.title} (${firstVideo.title})`}</h4>
        <p>{timeAgo(match.date)}</p>
      </div>
    </VideoDisplayWrapper>
  );
};

const VideoDisplayWrapper = styled.div`
  width: 60%;
  margin: 1rem auto;

  > div > h4 {
    margin: 0.4rem 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
