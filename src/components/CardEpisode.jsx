import React from "react";
import post from "../assets/post.webp";
export const CardEpisode = ({ episode }) => {
  let { air_date, name, url, image } = episode;
  return (
    <div className="w-full my-2 p-4 rounded bg-[#166a74] text-white text-2xl hover:bg-cyan-600 drop-shadow-2xl">
      <h3>Episode: {name === "" ? "Unknown" : name}</h3>
      <img src={image === "" ? { image } : post} alt={name} className="w-full p-4 h-[550px] mx-auto"/>
      <p>Air Date: {air_date === "" ? "Unknown" : air_date}</p>
      <a href={url} target="_blank">View episode</a>
    </div>
  );
};
