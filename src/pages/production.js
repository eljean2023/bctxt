import React from 'react';
import ImageSlider from '@/components/sliderPro';

const production = () => {
  return (
    <div className='container'>
      <h1 className="text-3xl font-bold text-center text-gray-500 mb-5">
      Your Shop, Your Choice, Maximize Your Production
</h1>
<h4 className="text-xl text-center txtColor mt-2 mb-8">
Track Departments, Statistics and more with customizable Graphs and other visuals in order to keep everyone updated and engaged.

Plus even more customizable Display boards to get the right information to the right people when they need it.
</h4>


      {/* Image Slider */}
      <ImageSlider />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-11 gap-4">
          {/* Left Column (4/12) */}
          <div className="col-span-4  p-6 rounded-lg shadow">
            <ul className="space-y-2">
              <li className="before:content-['➜'] before:mr-2 before:text-blue-500">Integration With Akzo's Carbeat™</li>
              <li className="before:content-['➜'] before:mr-2 before:text-blue-500">No Double Entry. Live Data From YOUR Files.</li>
              <li className="before:content-['➜'] before:mr-2 before:text-blue-500">Unlimited Departments, Unlimited Customizable Display Boards</li>
            </ul>
          </div>

          {/* Middle Column (3/12) */}
          <div className="col-span-3 p-6 rounded-lg shadow">
            <ul className="space-y-2">
              <li className="before:content-['➜'] before:mr-2 before:text-green-500">Integration To Test Drive Copilot™</li>
              <li className="before:content-['➜'] before:mr-2 before:text-green-500">Unlimited Departments, Unlimited Customizable Display Boards</li>
              <li className="before:content-['➜'] before:mr-2 before:text-green-500">Drag and Drop with Touch Screen Technology</li>
            </ul>
          </div>

          {/* Right Column (4/12) */}
          <div className="col-span-4  p-6 rounded-lg shadow">
            <ul className="space-y-2">
              <li className="before:content-['➜'] before:mr-2 before:text-red-500">Schedule Production Start Dates</li>
              <li className="before:content-['➜'] before:mr-2 before:text-red-500">Customer Delivery Schedule</li>
              <li className="before:content-['➜'] before:mr-2 before:text-red-500">Unlimited Job Classes or 'types of repairs's</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center text-gray-500 mb-5">
      Customized Solutions From BodyshopConnect -- ProductionConnect
</h1>
<h4 className="text-xl text-center txtColor mt-2">
BodyshopConnect by Micazen is an auto body shop management software designed to be customized for the Collision Repair Process. No two repairs are the same so why be forced into a process by other  body shop management tools available. ProductionConnect allows shops to maximize their productivity. We have unlimited departments and different views to manage files moving through production.  We also allow for customized Production Boards for use at the desktop or large screen TV's located in the shop.
</h4>
    </div>
  );
};

export default production;
