import { ReactElement, useContext, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import VideosList from "../components/VideosPage/VideosList";
import Context from "../context/ContextProvider";

export default function VideosPage(): ReactElement {
  const contextData: any = useContext(Context);
  const { clearSearch } = contextData;

  useEffect(() => {
    clearSearch();
    // eslint-disable-next-line
  }, []);
  const handleScroll = (e: any) => {
    const bottom =
      Math.floor(e.target.scrollHeight - e.target.scrollTop) <=
      Math.floor(e.target.clientHeight);

    if (bottom) {
      contextData.loadNextPage();
    }
  };
  return (
    <VideosPageWrapper onScroll={handleScroll}>
      <Navbar></Navbar>
      <VideosList></VideosList>
    </VideosPageWrapper>
  );
}

const VideosPageWrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;
