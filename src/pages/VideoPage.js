import boatVideo from "../media/videos/origami-boat.mp4";

const VideoPage = () => {
  return (
    <main>
      <figure className="video-container">
        <video src={boatVideo} controls></video>
        <figcaption>
          A short animation of an origami boat, a classic design!
        </figcaption>
      </figure>
    </main>
  );
};

export default VideoPage;
