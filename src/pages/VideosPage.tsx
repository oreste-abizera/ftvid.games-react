import { ReactElement, useContext } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Context from "../context/ContextProvider";

export default function VideosPage(): ReactElement {
  const contextData = useContext(Context);
  console.log(contextData);
  return (
    <VideosPageWrapper>
      <Navbar></Navbar>
    </VideosPageWrapper>
  );
}

const VideosPageWrapper = styled.div``;
