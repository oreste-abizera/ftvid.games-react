import React, { ReactElement } from "react";
import styled from "styled-components";

export default function HomePageHero(): ReactElement {
  return (
    <HomePageHeroWrapper>
      <div className="content"></div>
    </HomePageHeroWrapper>
  );
}

const HomePageHeroWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    width: 85%;
    height: 85%;
    border: 7px solid #743ad5;
  }
`;
