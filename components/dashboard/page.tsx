import React from "react";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "@/components/dashboard/HeroSection";
import VeterinarySection from "@/components/dashboard/VeterinarySection";
import ExplorePostSection from "./ExplorePostSection";
import NewsletterSection from "./NewsletterSection";
import ProductListSection from "../dashboard/ProductListSection";
import ExploreProducts from "../dashboard/ExploreProducts";
import PetSlider from "./PetSlider";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <VeterinarySection />
      <ExploreProducts />
      <PetSlider />
      <ProductListSection />
      <FeaturesSection />
      <ExplorePostSection />
      <NewsletterSection />
    </div>
  );
};

export default Dashboard;
