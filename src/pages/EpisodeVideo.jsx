import React from "react";
import poster from "../assets/poster.webp";
import episoderick from "../assets/episode.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EpisodeVideo = () => {
  return (
    <div className="relative w-full flex justify-center">
      <motion.div className="w-full flex justify-center align-center h-screen">
        <video
          src={episoderick}
          controls
          width="100%"
          poster={poster}
          loop
          playsInline
          className="md:object-fill object-contain md:my-0 my-auto md:p-20 w-full"
        ></video>
      </motion.div>
      <Link
        to="/episodes"
        className="absolute bottom-0 mb-4 bg-[#166a74] py-2 justify-center px-6 rounded text-white hover:bg-cyan-600 transition-all duration-200 active:scale-90 cursor-pointer"
      >
        &larr; Back
      </Link>
    </div>
  );
};

export default EpisodeVideo;
