import React, { useEffect, useState } from "react";
import axios from "axios";
import CardCharacters from "../components/CardCharacters";
import { Link } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then((res) => res.json())
    //   .then((res) => setCharacter(res.results));

    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setCharacters(res.data.results));
  }, []);

  console.log(characters);
  return (
    <div className="my-8">
      <Link to="/" style={{display: "inline-block"}}><img src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png" alt="" />
      </Link>
      <div className="grid grid-cols-1 2xl:grid-cols-5 md:grid-cols-3 gap-4 m-6">
        {characters.map((character) => {
          return <CardCharacters character={character} key={character.id} />;
        })}
      </div>
    </div>
  );
};

export default Characters;
