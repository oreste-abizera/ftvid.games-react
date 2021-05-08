import { ReactElement } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import VideosList from "../components/VideosPage/VideosList";

export default function VideosPage(): ReactElement {
  return (
    <VideosPageWrapper>
      <Navbar></Navbar>
      <VideosList></VideosList>
    </VideosPageWrapper>
  );
}

const VideosPageWrapper = styled.div``;
