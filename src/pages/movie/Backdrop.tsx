import { BASE_IMAGE_URL } from "../../constants/baseUrl";
import BackdropSkeleton from "./BackdropSkeleton";

interface IBackdropImageUrl {
  backdropImageUrl: string;
  isLoaded: boolean;
}

const Backdrop = ({ backdropImageUrl, isLoaded }: IBackdropImageUrl) => (
  <div className="backdrop_container">
    <div className="backdrop_wrapper">
      {isLoaded ? (
        <div
          className="backdrop"
          style={{
            backgroundImage: `url(${BASE_IMAGE_URL}original${backdropImageUrl})`,
          }}
        />
      ) : (
        <BackdropSkeleton />
      )}
      <div className="backdrop_fade" />
    </div>
  </div>
);

export default Backdrop;
