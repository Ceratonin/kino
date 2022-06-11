import { BASE_IMAGE_URL } from "../../../constants/baseUrl";

const fallback = require("../../../assets/images/basic_profile.png");

interface IReviewsData {
  reviews: {
    results: {
      author_details: {
        username: string;
        avatar_path: string;
        rating: number;
      };
      author: string;
      id: string;
      content: string;
    }[];
  };
}

const ReviewsPanel = ({ reviews }: IReviewsData) => {
  return (
    <ul className="reviews-panel panel-wrapper">
      {reviews.results.slice(0, 10).map((rev) => (
        <li key={rev.id} className="review_block">
          <img
            className="review_avatar"
            src={
              rev.author_details.avatar_path
                ? `${BASE_IMAGE_URL}original${rev.author_details.avatar_path}`
                : fallback
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
      ))}
    </ul>
  );
};

export default ReviewsPanel;
