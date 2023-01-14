import ButtonGroup from "components/checkButtonGroup/CheckButtonGroup";
import { useEffect, useState } from "react";
import { getSearchedData } from "services/getSearchedData";
import { TSearchedData } from "types/movieData";
import FoundMovie from "./foundMovie/FoundMovie";

const SearchPage = () => {
  const [{ results, totalPages, totalResult }, setSearchedData] = useState({
    results: [],
    totalPages: 0,
    totalResult: 0,
  } as TSearchedData);

  const searchInput = "Lebowski";

  useEffect(() => {
    getSearchedData(searchInput, 1).then((res) => {
      setSearchedData(res);
      //   setIsLoaded(true);
    });
  }, []);

  return (
    <div className="container">
      <section className="searchPage__filter">
        <p>Search for:</p>
        <ButtonGroup labelsArr={["Movies", "Tv Shows", "Persons"]} />
      </section>

      {results.map((val) => (
        <div className="searchPage__content" key={val.id}>
          {val.media_type === "movie" ? (
            <FoundMovie data={val} />
          ) : val.media_type === "tv" ? (
            <div>{val.name}</div>
          ) : (
            <div>{val.name}</div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
