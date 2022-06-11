interface IVideosPanel {
  videos: {
    results: { key: string; site: string }[];
  };
}

const VideosPanel = ({ videos }: IVideosPanel) => {
  const urlArr = videos.results.map(({ key, site }, id) =>
    site === "YouTube" ? key : ""
  );
  const url = urlArr.find((item) => item);

  return (
    <div className="videos-panel">
      <p>Trailer:</p>
      <div className={`panel-wrapper ${!url ? "err" : ""}`}>
        {url ? (
          <iframe
            src={`https://www.youtube.com/embed/${url}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div>Trailer not Found</div>
        )}
      </div>
    </div>
  );
};

export default VideosPanel;
