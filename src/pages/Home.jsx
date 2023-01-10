import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
const Home = () => {
  return (
    <>
      <header className="w-full flex align-center justify-center my-8">
        <img
          src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
          alt="title"
        />
      </header>
      <Link to="/characters">
        <h3 className="text-4xl font-bold text-white">view all Characters</h3>
      </Link>
      <section className="relative h-96">
        <video
          src={video}
          autoPlay
          loop
          className="w-full h-full center object-cover p-4 "
        ></video>
      </section>
    </>
  );
};

export default Home;
