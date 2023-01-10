import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
const Home = () => {
  return (
    <>
      <header className="w-full flex align-center justify-center my-8 h-96 mask2">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full 2xl:h-[420px] h-full p-4 object-cover mask1"
        ></video>
        <div className="absolute w-full flex align-center justify-center flex-col">
          <img
            src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
            alt="title"
            className="w-96 flex m-auto  h-50 object-cover"
          />
        </div>
      </header>
      <Link to="/characters">
        <h3 className="text-5xl font-bold text-white">view all Characters</h3>
      </Link>
    </>
  );
};

export default Home;
