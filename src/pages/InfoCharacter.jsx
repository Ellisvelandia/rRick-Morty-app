import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCharacter() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleCharacterData = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await res.json();
        setCharacter(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleCharacterData();
  }, [id]);

  return (
    <>
      <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
        <div className="grid grid-cols-1 gap-4 p-8 md:grid-cols-2 place-items-center">
          <article>
            <img
              src={character.image}
              alt={character.name}
              className="w-[400px] rounded"
            />
          </article>
          <article className="w-full md:my-8">
            <h1 className="text-3xl font-bold text-white mb-8 md:text-6xl h-full">
              {character.name}
            </h1>
            <p className="text-gray-100 my-1 text-2xl md:text-4xl leading-loose md:leading-relaxed">
            Species: {character.species}
            </p>
            <p className="text-gray-100 my-1 text-2xl md:text-4xl leading-loose md:leading-relaxed">
             Gender: {character.gender}
            </p>
            <p className="text-gray-100 my-1 text-2xl md:text-4xl leading-loose md:leading-relaxed">
              Origin: {character.origin && character.origin.name}
            </p>
            <p className="text-gray-100 my-1 text-2xl md:text-4xl leading-loose md:leading-relaxed">
             Status: {character.status}
            </p>
            <p className="text-gray-100 my-1 text-2xl md:text-4xl leading-loose md:leading-relaxed">
             Location:  {character.location && character.location.name}
            </p>
            </article>
            <Link
              to="/characters"
              className="flex bg-[#166a74] py-2 justify-center px-6 rounded md:mt-12 text-white hover:bg-cyan-600 drop-shadow-2xl transition-all duration-200 active:scale-90"
            >
              &larr; Back
            </Link>
        </div>
      </section>
    </>
  );
}
