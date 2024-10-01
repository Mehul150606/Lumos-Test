"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ButtonFullRounded } from "@/components/common/ButtonmdRounded";

const HeroSection = () => {
  const sliderData = [
    {
      title: "The only thing you need is all here",
      content:
        "Sagittis in et purus euismod lorem nunc varius porta. Semper elit porttitor vestibulum, habitant duis arcu sit feugiat diam.",
      btnText: "SHOP NOW",
    },
    {
      title: "All your pet needs in one place",
      content:
        "Discover a wide range of pet products that are designed for your pet’s comfort and happiness.",
      btnText: "EXPLORE",
    },
    {
      title: "Care for Your Pets",
      content:
        "From food to toys, we have everything to make your pet’s life more enjoyable.",
      btnText: "LEARN MORE",
    },
    {
      title: "Pamper Your Furry Friend",
      content:
        "Get the best for your pet with our carefully selected range of products.",
      btnText: "VIEW COLLECTION",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots: any) => (
      <div
        className="custom-appendDots"
        style={{
          padding: "15px",
          marginTop: "25px",
          bottom: "-15px",
          right: "30%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => {
      return (
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#666666",
            display: "inline-block",
            margin: "0 5px",
          }}
        />
      );
    },
  };

  return (
    <div className="relative w-full md:h-screen hero-bg">
      <div className="relative z-10 flex items-center justify-center h-full bg-opacity-70">
        <div className="grid grid-cols-1 md:grid-cols-3 mx-2.5 max-w-2xl md:max-w-6xl md:mx-auto pb-3">
          <div className="slider-container overflow-hidden">
            <Slider {...settings}>
              {sliderData.map((item, index) => (
                <div key={index} className="text-black-300 mb-10">
                  <h1 className="text-[36px] font-bold leading-[50px] mb-2">
                    {item.title}
                  </h1>
                  <p className="mb-4 text-sm font-normal leading-6">
                    {item.content}
                  </p>
                  <ButtonFullRounded title={item.btnText} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
