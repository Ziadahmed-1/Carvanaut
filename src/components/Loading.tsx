import loadingGIF from "../../public/preloader.gif";

function Loading() {
  return (
    <div className="loading-container">
      <img src={loadingGIF} alt="Loading..." />
      <p>Loading ...</p>
    </div>
  );
}

export default Loading;
