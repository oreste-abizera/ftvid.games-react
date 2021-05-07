import React from "react";
import styled from "styled-components";
import HomePageSlider from "../components/Homepage/HomePageSlider";

function HomePage(): React.ReactElement {
  return (
    <HomePageWrapper>
      <HomePageSlider></HomePageSlider>
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.div``;
export default HomePage;
