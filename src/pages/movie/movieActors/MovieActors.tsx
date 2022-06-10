import React from "react";
import { BASE_IMAGE_URL } from "../../../constants/baseUrl";

interface IMovieActors {
  actors: {
    cast: { name: string; character: string; profile_path: string }[];
    crew: {}[];
  };
}

export const MovieActors = ({ actors }: IMovieActors) => {
  return (
    <div className="actors-panel panel-wrapper">
      {actors.cast.splice(0, 6).map((actor, key) => {
        return (
          <div>
            <img
              src={`${BASE_IMAGE_URL}original${actor.profile_path}`}
              alt={actor.name}
              width={38}
              height={58}
            />
            <p>{actor.name}</p>
            <p>as {actor.character}</p>
          </div>
        );
      })}
      <p>Show more...</p>
    </div>
  );
};
