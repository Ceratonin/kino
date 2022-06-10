import React from "react";
import { IMovieData } from "../../../types/movieData";

interface IUserPanel {
  movieData: IMovieData;
}

const UserPanel = ({ movieData }: IUserPanel) => {
  return (
    <div className="user-panel-container panel-wrapper">
      <span>
        <p>Original title</p>
        <h4>{movieData.original_title}</h4>
        <hr />
      </span>

      <span>
        <p>Average Rating</p>
        <h4>{movieData.vote_average}</h4>
        <hr />
      </span>

      <span>
        <p>Rate</p>
        <h4>RATE?????????????????????????????</h4>
        <hr />
      </span>

      <span>
        <p>Popularity</p>
        <h4>{movieData.popularity}</h4>
        <hr />
      </span>

      <div className="button-group">
        <i className="fa-solid fa-bookmark" />
        <button type="button">Log</button>
        <i className="fa-regular fa-comment-dots" />
      </div>
    </div>
  );
};

export default UserPanel;
