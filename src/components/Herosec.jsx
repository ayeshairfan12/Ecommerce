import React from 'react'

const Herosec = () => {
  return (
    <div className="relative -z-30 bg-[#1a5557] h-[500px]  ">
  {/* Image */}
  <img 
    src="https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated-showing-peace-sign_158538-8572.jpg?w=740&t=st=1713357088~exp=1713357688~hmac=b28ce23ee30b1d397858b85f6dab2d458d79daa367c8ee2362aa735d81362ffd" 
    alt="Stylish girl"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
  
  {/* Content */}
  <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 text-white lg:w-1/2">
    <h1 className="text-4xl font-bold mb-4 text-[#28193D] italic">INTROBELLE.</h1>
    <p className="text-2lg font-medium mb-8 text-[#28193D]"> We provide the largest clothing collection for any season. You can choose classy or trendy design according to your prefrences. our services are super fast and we upgrade within 24 Hours</p>
    <button className=" bg-[#28193D] text-white font-bold px-6 py-3 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out">Shop Now</button>
  </div>
</div>

  
  )
}

export default Herosec
