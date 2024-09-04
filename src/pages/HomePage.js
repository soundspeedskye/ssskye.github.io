import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [hover, setHover] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    if (hover) {
      navigate("/about");
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col">
      <div className="flex-1 flex justify-center items-center text-center">
        <h1
          className="text-7xl font-bold text-black mb-7 cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleClick}
        >
          {hover ? "Enter" : "Hi!"}
        </h1>
        <p className="text-4xl text-gray-600">
          &ensp;Let's getting to know each other
        </p>
      </div>
    </div>
  );
}

export default Homepage;
