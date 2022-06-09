import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={1200}
    height={675}
    viewBox="0 0 1200 675"
    backgroundColor="#303b46"
    foregroundColor="#1a2127"
  >
    <rect x="0" y="0" rx="0" ry="0" width="1200" height="675" />
  </ContentLoader>
);

export default MyLoader;
