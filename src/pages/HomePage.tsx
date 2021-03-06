import React from "react";
import styled from "styled-components";
import HomePageHero from "../components/Homepage/HomePageHero";
import HomePageSlider from "../components/Homepage/HomePageSlider";
import { SEO } from "../components/SEO";
import Context from "../context/ContextProvider";

function HomePage(): React.ReactElement {
  const { clearSearch }: any = React.useContext(Context);
  React.useEffect(() => {
    clearSearch();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <SEO></SEO>
      <HomePageWrapper>
        <HomePageSlider></HomePageSlider>
        <HomePageHero></HomePageHero>
      </HomePageWrapper>
    </>
  );
}

const HomePageWrapper = styled.div``;
export default HomePage;
