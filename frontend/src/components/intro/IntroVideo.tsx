import "./IntroVideo.css"

type IntroVideoProps = {
  onEnd: () => void;
};

const IntroVideo = ({ onEnd }: IntroVideoProps) => {
  return (
    <video
      autoPlay
      muted
      playsInline
      onEnded={onEnd}
      className="intro-video"
    >
      <source src="videos/intro.mp4" type="video/mp4" />
    </video>
  );
};

export default IntroVideo;
