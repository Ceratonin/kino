import { BASE_IMAGE_URL } from "constants/baseUrl";
import BackdropSkeleton from "./BackdropSkeleton";

interface IBackdropImageUrl {
  posterUrl: string;
}

const Backdrop = ({ posterUrl }: IBackdropImageUrl) => (
  <div className="backdrop_container">
    <div className="backdrop_wrapper">
      {posterUrl ? (
        <div
          className="backdrop"
          style={{
            backgroundImage: `url(${BASE_IMAGE_URL}w1280${posterUrl})`,
            // backgroundImage: `url(${BASE_IMAGE_URL}original${posterUrl})`,
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
