import { useContext } from "react";
import movieDataContext from "../../../contexts/movieDataContext";

const UserPanel = () => {
  const {
    original_title: originalTitle,
    vote_average: voteAverage,
    popularity,
  } = useContext(movieDataContext);

  return (
    <div className="user-panel-container panel-wrapper">
      <span>
        <p>Original title</p>
        <h4>{originalTitle}</h4>
        <hr />
      </span>

      <span>
        <p>Average Rating</p>
        <h4>{voteAverage}</h4>
        <hr />
      </span>

      <span>
        <p>Rate</p>
        <h4>RATE?????????????????????????????</h4>
        <hr />
      </span>

      <span>
        <p>Popularity</p>
        <h4>{popularity}</h4>
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
