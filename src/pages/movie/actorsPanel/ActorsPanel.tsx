import { BASE_IMAGE_URL } from "../../../constants/baseUrl";
import { TActorsPanel } from "../../../types/movieData";

const ActorsPanel = ({ cast }: TActorsPanel) => {
  return (
    <div className="actors-panel panel-wrapper">
      {cast.splice(0, 6).map((actor, key) => {
        return (
          <div key={actor.name}>
            <img
              src={`${BASE_IMAGE_URL}original${actor.profile_path}`}
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
