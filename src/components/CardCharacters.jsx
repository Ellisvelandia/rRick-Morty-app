import React from "react";

const CardCharacters = ({ character }) => {
  let { name, image, status } = character;
  return (
    <div className="my-2 p-4 rounded bg-[#166a74] text-white text-2xl hover:bg-cyan-600 drop-shadow-2xl cursor-pointer">
      <h3>{name}</h3>
      <img src={image} alt={name} className="w-full h-56" />
      <p>Status: {status}</p>
    </div>
  );
};

export default CardCharacters;
