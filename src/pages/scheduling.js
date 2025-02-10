import React from 'react';
import ImageSlider from '@/components/sliderPro';

const scheduling = () => {
  return (
    <div className='container'>
      <h1 className="text-3xl font-bold text-center text-gray-500 mb-5">
      Schedule The Way You Want To -  By Hours, Number of Jobs, Types of Repair & More
</h1>
<h4 className="text-xl text-center txtColor mt-2 mb-8">
Schedule all work in process and new repairs with our Capacity Scheduling. Multiple Views are Available To Customize Both Your Estimate Appointments and Repair Order Scheduling. Keep on top of Your Dates to help you meet or exceed Your Delivery Targets.
</h4>


      {/* Image Slider */}
      <ImageSlider />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-11 gap-4">
          {/* Left Column (4/12) */}
          <div className="col-span-4  p-6 rounded-lg shadow">
            <ul className="space-y-2">
              <li className="before:content-['➜'] before:mr-2 before:text-blue-500">Vehicle Arrival Scheduling™</li>
              <li className="before:content-['➜'] before:mr-2 before:text-blue-500">Production Scheduling</li>
              <li className="before:content-['➜'] before:mr-2 before:text-blue-500">Automate Drop Off Reminders by Email or Text Message</li>
            </ul>
          </div>

          {/* Middle Column (3/12) */}
          <div className="col-span-3 p-6 rounded-lg shadow">
            <ul className="space-y-2">
              <li className="before:content-['➜'] before:mr-2 before:text-green-500">Schedule Appointments</li>
              <li className="before:content-['➜'] before:mr-2 before:text-green-500">Schedule Appraisals</li>
              <li className="before:content-['➜'] before:mr-2 before:text-green-500">Schedule Other Non Repair Order Appointments</li>
            </ul>
          </div>

          {/* Right Column (4/12) */}
          <div className="col-span-4  p-6 rounded-lg shadow">
            <ul className="space-y-2">
              <li className="before:content-['➜'] before:mr-2 before:text-red-500">Balance and Maximize your shop's Capacity</li>
              <li className="before:content-['➜'] before:mr-2 before:text-red-500">Schedule Production Start Dates</li>
              <li className="before:content-['➜'] before:mr-2 before:text-red-500">Customer Delivery Schedule</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center text-gray-500 mb-5">
      Customized Solutions From BodyshopConnect -- ScheduleConnect
</h1>
<h4 className="text-xl text-center txtColor mt-2">
BodyshopConnect by Micazen is an auto body shop management software designed to be customized for the Collision Repair Process. No two repairs are the same so why be forced into a process by other  body shop management tools available. ScheduleConnect allows shops to maximize their productivity. We have multiple Schedulers available to use.  Appointment Calendar, Arrival Scheduler, Production Scheduler and Delivery Scheduler. We also allow for customized Display Boards for use at the desktop or large screen TV's located in the shop.
</h4>
    </div>
  );
};

export default scheduling;
