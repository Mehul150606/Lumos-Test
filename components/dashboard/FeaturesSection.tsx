import React from 'react';
import Tree from '@/app/img/Vector 164.png';
import Truck from '@/app/img/Group 5719.png';
import Flexible from '@/app/img/Order@1x.png';
import FeatureCard from '../common/FeatureCard';

const FeaturesSection = () => {
  return (
    <div className='bg-blue-50 feature-bg py-10 md:py-16'>
      <div className='container mx-auto px-4 overflow-x-auto w-full'>
        <div className='inline-flex md:flex md:flex-row justify-center space-x-6 md:space-y-0 md:space-x-6 ml-4 mr-6'>
          <FeatureCard
            title='Fresh Product'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultrices turpis proin nulla.'
            img={Tree}
          />
          <FeatureCard
            title='Fast Shipping, Always'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultrices turpis proin nulla.'
            img={Truck}
          />
          <FeatureCard
            title='Flexible Delivery'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              ultrices turpis proin nulla.'
            img={Flexible}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
