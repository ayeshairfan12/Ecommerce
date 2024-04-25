import React from 'react';

const Newsletter = () => {
  return (
    <div className='bg-[#8D769A] h-[50vh] w-full flex flex-col items-center justify-center py-16'>
      <div className='text-white text-4xl text-center font-medium font-poppins mb-4'>
        Newsletter
      </div>
      <div className='text-center text-white mb-8'>
        Stay Ahead of the Curve with Our Trending Alerts!
      </div>
      <div className='flex flex-col md:flex-row items-center gap-4'>
        <input 
          className="border-b-[1px] border-white outline-none bg-transparent text-white px-2 py-1 w-full md:w-auto"
          type="text" 
          placeholder="Email"
        />
        <button className="bg-white text-[#8D769A] px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300 ease-in-out">
          OK
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
