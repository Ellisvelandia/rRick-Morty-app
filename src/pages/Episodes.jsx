import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CardEpisode } from "../components/CardEpisode";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((res) => setEpisodes(res.data.results));
  }, []);

  console.log(episodes);

  return (
    <div className="my-8">
      <Link to="/" className="inline-block">
        <img
          src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
          alt=""
        />
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
        {episodes.map((episode) => {
          return <CardEpisode episode={episode} key={episode.id} />;
        })}
      </div>
    </div>
  );
};

export default Episodes;
