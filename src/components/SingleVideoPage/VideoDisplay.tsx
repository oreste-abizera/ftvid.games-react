import React from "react";
import { Match } from "../../utils/types";

interface Props {
  match: Match;
}

export const VideoDisplay = (props: Props) => {
  return <div>{props.match.embed}</div>;
};
