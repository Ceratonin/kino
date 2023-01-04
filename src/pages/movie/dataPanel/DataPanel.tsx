import { useContext } from "react";
import movieDataContext from "../../../contexts/movieDataContext";

const DataPanel = () => {
  const {
    release_date: releaseDate,
    runtime,
    tagline,
    budget,
    revenue,
    original_language: originalLanguage,
    genres,
  } = useContext(movieDataContext);

  const toHours = () => {
    const hours = Math.trunc(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  const parseDate = () => {
    return new Date(releaseDate).toDateString();
  };

  const parseMoney = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const movieInfoArr = new Map<
    string,
    string | number | { id: number; name: string }[]
  >([
    ["Tagline", tagline],
    ["Runtime", runtime && toHours()],
    ["ReleaseDate", releaseDate && parseDate()],
    ["Budget", budget && `$${parseMoney(budget)}`],
    ["Revenue", revenue && `$${parseMoney(revenue)}`],
    ["OriginalLangueage", originalLanguage],
    ["Genres", genres],
  ]);

  return (
    <div className="movie-info-container panel-wrapper">
      {[...movieInfoArr].map(([key, value]) => (
        <span key={key}>
          <p>{key}</p>
          {key === "Genres" ? (
            <div className="genres-array">
              {genres.map(({ id, name }) => (
                <h4 key={id}>{name}</h4>
              ))}
            </div>
          ) : (
            <h4>{typeof value === "object" || value || "No Information"}</h4>
          )}
          <hr />
        </span>
      ))}
    </div>
  );
};

export default DataPanel;
