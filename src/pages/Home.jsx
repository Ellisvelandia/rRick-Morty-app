import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/video.mp4";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <header className="w-full flex align-center justify-center my-8 h-96 mask2">
        <video
          src={video}
          autoPlay
          loop
          muted
          className="w-full 2xl:h-[420px] h-full object-cover mask1"
        ></video>
        <div className="absolute w-full flex align-center justify-center flex-col">
          <img
            src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
            alt="title"
            className="w-80 mt-8 md:mt-0 md:w-[800px] flex m-auto h-50 object-cover"
          />
        </div>
      </header>
      <div className="flex xl:flex-row flex-col justify-center md:gap-12 gap-2">
        <Link to="/characters">
          <motion.h3
            className="md:text-5xl text-3xl text-white hover:text-[#216a74]"
            whileTap={{ rotate: 360, scale: 0.5 }}
          >
            view all Characters
          </motion.h3>
        </Link>
        <Link to="/episodes">
          <motion.h3
            className="md:text-5xl text-3xl text-white hover:text-[#216a74]"
            whileTap={{ rotate: 360, scale: 0.5 }}
          >
            view Episodes
          </motion.h3>
        </Link>
      </div>
    </>
  );
};

export default Home;
