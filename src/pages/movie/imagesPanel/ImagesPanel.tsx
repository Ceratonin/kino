import { useContext } from "react";
import { BASE_IMAGE_URL } from "constants/baseUrl";
import movieDataContext from "contexts/movieDataContext";

const ImagesPanel = () => {
  const { images } = useContext(movieDataContext);

  const imagesUrlArr = images.backdrops.map((image) => image.file_path);

  return (
    <div className="images-panel">
      <p>Images:</p>
      <div className={`panel-wrapper ${!images.backdrops.length && "err"}`}>
        {images.backdrops.length ? (
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-interval={false}
          >
            <div className="carousel-inner">
              {imagesUrlArr.map((url, key) => (
                <div
                  key={url}
                  className={`carousel-item ${key === 0 ? "active" : ""}`}
                >
                  {url && (
                    <img
                      src={`${BASE_IMAGE_URL}original${url}`}
                      className="d-block w-100"
                      alt="backdrop"
                    />
                  )}
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          <div>No Images</div>
        )}
      </div>
    </div>
  );
};

export default ImagesPanel;
