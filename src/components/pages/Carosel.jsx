import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/CaroselImg1.jpg";
import image2 from "../../assets/CaroselImg2.jpg";
import image3 from "../../assets/CaroselImg3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Carosel = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative z-10" data-aos="zoom-in">
      <Carousel
        autoPlay={true}
        showArrows={false}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
        data-interval={3000}
      >
        <div>
          <img className="h-[70vh] object-cover" src={image1} />
        </div>
        <div>
          <img className="h-[70vh] object-cover" src={image2} />
        </div>
        <div>
          <img className="h-[70vh] object-cover" src={image3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Carosel;
