import React from "react";
import { Carousel } from "react-bootstrap";
import photo1 from "../../images/11.jpg";
import photo2 from "../../images/12.jpg";
import photo3 from "../../images/13.jpg";
import "./assets/ContentBox.css";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={photo1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p style={{ color: "white" }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={photo3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p style={{ color: "white" }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
