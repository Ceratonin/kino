import { BASE_IMAGE_URL } from "constants/baseUrl";
import { TReviewsData } from "types/movieData";

const fallback = require("assets/images/blank_profile.jpg");

const ReviewsPanel = ({ reviews }: TReviewsData) => {
  const getAvatarPath = (num: number) => {
    const url = reviews.results[num].author_details.avatar_path;
    return url.split("/").length === 2
      ? `${BASE_IMAGE_URL}original${url}`
      : url.slice(1, url.length);
  };

  return (
    <ul
      className={`reviews-panel panel-wrapper ${
        !reviews.results.length && "err"
      }`}
    >
      {reviews.results.length ? (
        reviews.results.slice(0, 10).map((rev, ind) => (
          <li key={rev.id} className="review_block">
            <img
              className="review_avatar"
              src={
                rev.author_details.avatar_path ? getAvatarPath(ind) : fallback
              }
              alt="Avatar"
            />
            <div className="review_content">
              <div className="review_header">
                <p className="review_author">{rev.author}</p>
                <span className="review_rating">
                  {rev.author_details.rating
                    ? `Rated: ${rev.author_details.rating}/10`
                    : ""}
                </span>
              </div>

              <div className="review_text">{rev.content}</div>
              <hr />
            </div>
          </li>
        ))
      ) : (
        <div>No Reviews Yet!</div>
      )}
    </ul>
  );
};

export default ReviewsPanel;
