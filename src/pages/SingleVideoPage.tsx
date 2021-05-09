import { ReactElement, useContext } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Context from "../context/ContextProvider";

export default function SingleVideoPage(): ReactElement {
  const contextData: any = useContext(Context);
  return (
    <SingleVideoPageWrapper>
      <Navbar></Navbar>
    </SingleVideoPageWrapper>
  );
}

const SingleVideoPageWrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;
