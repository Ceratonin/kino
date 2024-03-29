import { BASE_IMAGE_URL } from "constants/baseUrl";
import { getRandApprovedData } from "services/getRandomBackdrop";

const ErrorPage = () => {
  const { title, year, backdropUrl } = getRandApprovedData();

  return (
    <div className="error-page">
      <img
        src={`${BASE_IMAGE_URL}original${backdropUrl}`}
        alt="err"
        className="backdrop"
      />
      <span className="error-page__message">
        <p className="container">Page Not Found!</p>
      </span>
      <span className="error-page__annotation">
        <p>{title}</p>
        <p>{year}</p>
      </span>
    </div>
  );
};

export default ErrorPage;
