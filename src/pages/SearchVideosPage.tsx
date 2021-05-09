import { ReactElement, useContext } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import VideosList from "../components/VideosPage/VideosList";
import Context from "../context/ContextProvider";

export default function SearchVideosPage(): ReactElement {
  const contextData: any = useContext(Context);
  return (
    <SearchVideosPageWrapper>
      <Navbar></Navbar>
      <VideosList></VideosList>
    </SearchVideosPageWrapper>
  );
}

const SearchVideosPageWrapper = styled.div``;
