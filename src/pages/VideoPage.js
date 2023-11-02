import boatVideo from "../media/videos/origami-boat.mp4";

const VideoPage = () => {
  return (
    <main className="container">
      <figure className="video-container">
        <video src={boatVideo} controls></video>
        <figcaption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis
          a lacus at venenatis.
        </figcaption>
      </figure>
    </main>
  );
};

export default VideoPage;
