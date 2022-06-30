import React from "react";
import Carousel from "../Components/Carousel";
import CardComponent from "../Component/Card";
import Content from "../Components/Content";

function LandingPage() {
  return (
    <div>
      <Carousel />
      <CardComponent />
      <Content />
    </div>
  );
}

export default LandingPage;