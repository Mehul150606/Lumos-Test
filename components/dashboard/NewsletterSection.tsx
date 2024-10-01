"use client";
import React from "react";
import Image from "next/image";
import DogImage from "@/public/images/dogImage.png";

const NewsletterSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="bg-[#F9FAFB] rounded-lg  px-6 md:px-12 lg:px-24 py-14 relative">
        <div className="flex flex-wrap flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex-1 md:pr-10 lg:pr-20">
            <h2 className="text-[24px] md:text-[30px] font-normal text-[#000000] mb-2">
              Stay Connected With Us.
            </h2>
            <p className="text-[#666666] text-[14px] md:text-[16px] mb-8">
              Choose your pet and subscribe! Receive exclusive discounts to
              always buy at the best price in Petshop.
            </p>

            <div className="flex space-x-4 mb-4 mt-2 justify-start gap-5 flex-wrap flex-start">
              {["Dog", "Cat", "Small Pets", "Fish", "Birds"].map(
                (pet, index) => (
                  <div key={index} className="flex items-center">
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

            <div className="flex mt-10 md:mt-16 w-full md:w-3/4 bg-white rounded-full p-2">
              <input
                type="text"
                placeholder="Signup for Newsletter"
                className="w-[1.3rem]p-3 rounded-l-full outline-none flex-grow pl-5 placeholder:text-black-300 opacity-50"
              />
              <button className="px-6 py-3 bg-[#112025] text-white rounded-full font-medium hover:bg-[#0f1d20]">
                SUBMIT
              </button>
            </div>
          </div>

          <div className=" md:mt-0 md:ml-10 lg:ml-20 flex-shrink-0 relative top-[54px] w-full md:w-auto flex justify-end">
            <Image
              src={DogImage}
              alt="Dog Image"
              className="object-cover md:mt-6 w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
