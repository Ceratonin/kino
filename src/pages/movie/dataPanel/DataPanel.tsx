import { useContext } from "react";
import movieDataContext from "contexts/movieDataContext";

const DataPanel = () => {
  const {
    release_date: releaseDate,
    runtime,
    tagline,
    budget,
    revenue,
    original_language: originalLanguage,
    genres,
    spoken_languages: spokenLanguages,
  } = useContext(movieDataContext);

  const toHours = () => {
    const hours = Math.trunc(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  const parseDate = () => {
    const dateArr = new Date(releaseDate)
      .toLocaleString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .split(" ");

    return `${`${dateArr[1].split(",")[0]} ${dateArr[0]} ${dateArr[2]}`}`;
  };

  const parseMoney = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const parseOriginalLanguage = () => {
    let fullLanguage = "No Information";
    for (let i = 0; i < spokenLanguages.length; i += 1) {
      if (originalLanguage === spokenLanguages[i].iso_639_1)
        fullLanguage = spokenLanguages[i].english_name;
    }
    return fullLanguage;
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
    ["OriginalLangueage", parseOriginalLanguage()],
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
