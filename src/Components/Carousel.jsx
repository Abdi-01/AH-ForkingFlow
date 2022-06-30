import { UncontrolledCarousel } from "reactstrap";
import React from "react";

const Carousel = () => {
  return (
    <div>
      <UncontrolledCarousel
        items={[
          {
            altText: "Slide 1",
            caption: "Try 1",
            key: 1,
            src: "https://www.weltpixel.com/pub/media/wysiwyg/slider_page_Recovered_-05.png",
          },
          {
            altText: "Slide 2",
            caption: "Try 2",
            key: 2,
            src: "https://cdn2.f-cdn.com/contestentries/1484317/28695580/5ca1a77112883_thumb900.jpg",
          },
          {
            altText: "Slide 3",
            caption: "Try 3",
            key: 3,
            src: "https://www.tutorialswebsite.com/wp-content/uploads/2017/06/bootstrap-carousel.jpg",
          },
        ]}
      />
    </div>
  );
};

export default Carousel;
