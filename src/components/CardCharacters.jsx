import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CardCharacters = ({ character }) => {
  let { name, image } = character;
  return (
    <>
      <Link to={`/card/${character.id}`}>
        <motion.div
          className="my-2 p-4 rounded bg-[#166a74] text-white text-2xl hover:bg-cyan-600 drop-shadow-2xl cursor-pointer"
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h3>{name}</h3>
          <img src={image} alt={name} className="w-full h-64 my-4 rounded" loading="lazy" />
        </motion.div>
      </Link>
    </>
  );
};

export default CardCharacters;
