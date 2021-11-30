import React from "react";
import MyCarousel from "./Carousel";
import aboutImage from "../../images/about.png";
import imgChel from "../../images/11.jpg";
import imgPriroda from "../../images/12.jpg";
import imgNews1 from "../../images/2.jpg";
import { Link } from "react-router-dom";
import redMan from "../../images/6.jpg";
import FlipCard from "../FlipCrad/FlipCard";

const ContentBox = () => {
  return (
    <section className="content-box box-1">
      <div className="">
        <div className="block-box">
          <div className="header">
            <h2>How We Work</h2>
            <p className="intro">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor <br />
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </p>
          </div>
          <div className="content">
            <MyCarousel />
          </div>
          <div className="box1">
            <div className="description-img">
              <img src={aboutImage} />
            </div>

            <div className="description">
              <p>
                Ut volutpat consectetur aliquam. Curabitur auctor in nis ulum
                ornare. Condimentum fermentum gravida, metus elit vehicula dui.
                Curabitur auctor in nis ulum ornare. Sed consequat, augue
                condimentum fermentum. Ut volutpat consectetur aliquam.
                Curabitur auctor in nis ulum ornare. Condimentum fermentum
                gravida, metus elit vehicula dui.Ut volutpat consectetur
                aliquam. Curabitur auctor in nis ulum ornare. Condimentum
                fermentum gravida, metus elit .Ut volutpat consectetur aliquam.
                Curabitur auctor in nis ulum ornare. Condimentum fermentum
                gravida, metus elit vehicula dui. Curabitur auctor in nis ulum
                ornare. Sed consequat, augue condimentum fermentum computer
                component and accessory.Ut volutpat consectetur aliquam.
                Curabitur auctor in nis ulum ornare. Condimentum fermentum
                gravida, metus elit vehicula dui. Curabitur auctor in nis ulum
                ornare. Sed consequat, augue condimentum fermentum Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Fugiat cum ratione
                vitae cumque eveniet sed incidunt facilis maxime doloremque
                tempora voluptas, possimus, veritatis, aliquam ullam porro.
                Nulla rem iure perspiciatis, cumque blanditiis aspernatur amet
                animi nisi, aliquam velit molestiae quasi ullam cupiditate,
                similique facere odit? Ut eum magnam vel eveniet!
              </p>
            </div>
          </div>
          <div className="box2">
            <div className="box-4el">
              <img src={imgChel} alt="" />
            </div>
            <div className="box-priroda">
              <button className="btnOurService">Our Service</button>
              <img className="priroda-pic" src={imgPriroda} alt="" />
            </div>
          </div>
          <div className="header">
            <h2 style={{ margin: "5% 0" }}>Latest News</h2>
            <p className="intro">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor <br />
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua.
            </p>
          </div>
          <div className="news-box">
            <div className="about-news">
              <img src={imgNews1} className="img-responsive" />
              <div className="entry-details">
                <div className="entry-des">
                  <span>
                    <a href="#">08th Apr 2017</a>
                  </span>
                  <h3>
                    <a href="#">
                      Make Ahead Super Green Vegan Quinoa Sandwich.
                    </a>
                  </h3>
                  <p>
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim placerat facer possim
                    assum.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-news">
              <img src={imgNews1} className="img-responsive" />
              <div className="entry-details">
                <div className="entry-des">
                  <span>
                    <a href="#">08th Apr 2017</a>
                  </span>
                  <h3>
                    <a href="#">
                      Make Ahead Super Green Vegan Quinoa Sandwich.
                    </a>
                  </h3>
                  <p>
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim placerat facer possim
                    assum.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-news">
              <img src={imgNews1} className="img-responsive" />
              <div className="entry-details">
                <div className="entry-des">
                  <span>
                    <a href="#">08th Apr 2017</a>
                  </span>
                  <h3>
                    <a href="#">
                      Make Ahead Super Green Vegan Quinoa Sandwich.
                    </a>
                  </h3>
                  <p>
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim placerat facer possim
                    assum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FlipCard />
        </div>
      </div>
    </section>
  );
};

export default ContentBox;
