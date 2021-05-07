import React from "react";
import styled from "styled-components";
import HomePageHero from "../components/Homepage/HomePageHero";
import HomePageSlider from "../components/Homepage/HomePageSlider";

function HomePage(): React.ReactElement {
  return (
    <HomePageWrapper>
      <HomePageSlider></HomePageSlider>
      <HomePageHero></HomePageHero>
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.div``;
export default HomePage;
