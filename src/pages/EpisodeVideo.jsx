import React, { useEffect, useState } from "react";
import poster from "../assets/poster.webp";
import episoderick from "../assets/episode.mp4";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const EpisodeVideo = () => {
  const [episodes, setEpisodes] = useState({});
  const { id } = useParams();

  let { name } = episodes;

  useEffect(() => {
    const fetchSingleEpisode = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/episode/${id}`
        );
        const data = await res.json();
        setEpisodes(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleEpisode();
  }, [id]);

  return (
    <div className="relative w-full flex justify-center">
      <h1 className="text-white absolute md:top-5 top-20 justify-center w-full m-0 text-5xl">
        Episode: {name}
      </h1>
      <motion.div className="w-full flex justify-center align-center h-screen">
        <video
          src={episoderick}
          controls
          width="100%"
          poster={poster}
          loop
          playsInline
          className="md:object-fill object-contain md:h-full h-[550px] md:my-0 my-auto px-2 md:p-20 w-full"
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
