import { BASE_IMAGE_URL } from "../../constants/baseUrl";
import { getRandApprovedData } from "../../services/getRandomBackdrop";

const ErrorPage = () => {
  const { title, year, backdropUrl } = getRandApprovedData();

  return (
    <div className="error-page">
      <img
        src={`${BASE_IMAGE_URL}original${backdropUrl}`}
        alt="err"
        className="backdrop"
      />
      <span className="error-message">
        <p className="container">Page Not Found!</p>
      </span>
      <span className="movie-title">
        <p>{title}</p>
        <p>{year}</p>
      </span>
    </div>
  );
};

export default ErrorPage;
