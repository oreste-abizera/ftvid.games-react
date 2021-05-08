import { ReactElement, useContext } from "react";
import styled from "styled-components";
import Context from "../context/ContextProvider";

export default function VideosPage(): ReactElement {
  const contextData = useContext(Context);
  console.log(contextData);
  return <VideosPageWrapper>videos page</VideosPageWrapper>;
}

const VideosPageWrapper = styled.div``;
