import { BASE_IMAGE_URL } from "../../../constants/baseUrl";
// import "bootstrap/dist/js/bootstrap.bundle";

interface IImagesPanel {
  images: {
    backdrops: { file_path: string }[];
    posters: { file_path: string }[];
  };
}

const ImagesPanel = ({ images }: IImagesPanel) => {
  const imagesUrlArr = images.backdrops
    .splice(0, 10)
    .map((image) => image.file_path);

  return (
    <div className="images-panel">
      <p>Images:</p>
      <div className={`panel-wrapper ${images.backdrops === [] ? "err" : ""}`}>
        {images.backdrops !== [] ? (
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
                  <img
                    src={`${BASE_IMAGE_URL}original${url}`}
                    className="d-block w-100"
                    alt="backdrop"
                  />
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
