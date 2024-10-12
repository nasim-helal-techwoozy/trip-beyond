import React from 'react';

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
      <div className="relative flex items-center justify-center">
        {/* Video Animation */}
        <video
          className="w-72 h-72 object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/skeleton/loader.mp4" type="video/mp4" />

          Your browser does not support the video tag.
        </video>


      </div>

      {/* Loading Text */}
      <h1 className="text-xl md:text-3xl font-bold flex items-center ml-4">
        Please Wait <span className="ml-2 animate-dots">. . .</span>
      </h1>
    </div>
  );
};

export default Loader;
