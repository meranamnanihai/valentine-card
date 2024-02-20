import React, { useState } from 'react';
import video from "./video.mp4"
const VideoCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-lg  max-w-md">
        {!isOpen ? (
          <button 
            onClick={handleButtonClick}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg text-center w-full"
          >
            Open Card
          </button>
        ) : (
          <div className="text-center ">
            <p className="text-lg font-bold mb-4">Listen Slave you cannot use my name</p>
            <video loop autoPlay className="w-full">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
