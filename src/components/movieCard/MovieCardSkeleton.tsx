import ContentLoader from "react-content-loader";

function MovieCardSkeleton(props: any) {
  return (
    <div className="movie-card-wrapper">
      <ContentLoader
        speed={2}
        width={154}
        height={231}
        viewBox="0 0 154 231"
        backgroundColor="#9ab"
        foregroundColor="#92a0b0"
      >
        <rect x="0" y="3" rx="10" ry="10" width="154" height="231" />
      </ContentLoader>
    </div>
  );
}

export default MovieCardSkeleton;
