import { ReactElement } from "react";
import BackgroundSlider from "react-background-slider";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
import bg5 from "../../assets/bg5.jpg";
import bg6 from "../../assets/bg6.jpg";

function HomePageSlider(): ReactElement {
  const images = [bg1, bg2, bg3, bg4, bg5, bg6];
  return (
    <BackgroundSlider
      images={images}
      duration={5}
      transition={2}
    ></BackgroundSlider>
  );
}

export default HomePageSlider;
