import { useContext, useEffect } from "react";
import movieDataContext from "../../../contexts/movieDataContext";

const MovieHeader = () => {
  const {
    release_date: releaseDate,
    credits,
    title,
    original_language: originalLanguage,
    original_title: originalTitle,
  } = useContext(movieDataContext);

  const titleElement = document.querySelector("#title") as HTMLElement;

  useEffect(() => {
    let titleFontSize = 3;
    if (title) {
      while (titleElement.offsetWidth < titleElement.scrollWidth) {
        titleFontSize -= 0.1;
        if (titleFontSize === 0.5) break;
        titleElement.style.fontSize = `${titleFontSize}rem`;
      }
    }
  }, [title, titleElement]);

  const getReleaseYear = () => releaseDate.split("-")[0];

  const findDirector = () => {
    const director = credits.crew.find((worker) => worker.job === "Director");

    return director ? director.name : "No Information";
  };

  const checkOriginalTitleLang = () => {
    return originalLanguage === "en" ? "" : originalTitle;
  };

  return (
    <div className="movie-page__header">
      <p id="title" className="movie-page__title">
        {title}
      </p>
      <div className="movie-page__side-info">
        <p>{getReleaseYear()}</p>
        <span className="movie-page__shot-by">
          <p>Shot by:&ensp;</p>
          <p>{findDirector()}</p>
        </span>
        <p
          className={`movie-page__original-title ${
            originalTitle.length > 45 ? "text-small" : ""
          }`}
        >
          {checkOriginalTitleLang()}
        </p>
      </div>
    </div>
  );
};

export default MovieHeader;
