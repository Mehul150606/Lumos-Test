"use client";
import React from "react";
import Image from "next/image";
import DogImage from "@/public/images/dogImage.png";

const NewsletterSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="bg-[#F9FAFB] rounded-lg  px-6 lg:px-12 lg:px-24 py-14 relative">
        <div className="flex flex-wrap flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="flex-1">
            {/* <div className="flex-1 lg:pr-10 lg:pr-0"> */}
            <h2 className="text-[24px] lg:text-[30px] font-normal text-[#000000] mb-2">
              Stay Connected With Us.
            </h2>
            <p className="text-[#666666] text-[14px] lg:text-[16px] mb-8 lg:pr-16">
              Choose your pet and subscribe! Receive exclusive discounts to
              always buy at the best price in Petshop.
            </p>

            {/* <div className="flex md:space-x-4 mb-4 mt-2 justify-start gap-5 md:gap-14 flex-wrap flex-start"> */}
            <div className="grid grid-cols-3 lg:grid-cols-5 mb-0 lg:mb-4 mt-2">
              {["Dog", "Cat", "Small Pets", "Fish", "Birds"].map(
                (pet, index) => (
                  <div key={index} className="flex items-center mb-5 lg:mb-0">
                    <input
                      type="checkbox"
                      id={pet.toLowerCase()}
                      name={pet.toLowerCase()}
                      className="custom-checkbox mr-2"
                      defaultChecked={pet === "Dog"}
                    />
                    <label
                      htmlFor={pet.toLowerCase()}
                      className="text-[#444444]"
                    >
                      {pet}
                    </label>
                  </div>
                )
              )}
            </div>

            <div className="flex mt-7 lg:mt-10 w-full lg:w-3/4 bg-white rounded-full p-2">
              <input
                type="text"
                placeholder="Signup for Newsletter"
                className="w-[1.3rem]p-3 rounded-l-full outline-none flex-grow pl-5 placeholder:text-black-300 opacity-40 font-semibold text-[14px] leading-[21px]"
              />
              <button className="px-6 py-3 bg-[#112025] text-white rounded-full font-medium hover:bg-[#0f1d20]">
                SUBMIT
              </button>
            </div>
          </div>

          <div className="lg:mt-0 h-[145px] lg:h-auto lg:ml-10 lg:ml-20 flex-shrink-0 relative top-[24px] lg:top-[54px] w-full lg:w-auto flex justify-end">
            <Image
              src={DogImage}
              alt="Dog Image"
              className="object-cover lg:mt-6 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
