import { useContext } from "react";
import { BASE_IMAGE_URL } from "constants/baseUrl";
import movieDataContext from "contexts/movieDataContext";

const fallback = require("assets/images/blank_profile.jpg");

const ActorsPanel = () => {
  const { credits } = useContext(movieDataContext);

  return (
    <div className="actors-panel panel-wrapper">
      {credits.cast.splice(0, 6).map((actor, key) => {
        return (
          <div key={actor.name}>
            <img
              src={
                actor.profile_path
                  ? `${BASE_IMAGE_URL}original${actor.profile_path}`
                  : fallback
              }
              alt="Poster"
              width={38}
              height={58}
            />
            <p>{actor.name || "No Information"}</p>
            <p>as {actor.character || "No Information"}</p>
          </div>
        );
      })}
      <p>Show more...</p>
    </div>
  );
};

export default ActorsPanel;
