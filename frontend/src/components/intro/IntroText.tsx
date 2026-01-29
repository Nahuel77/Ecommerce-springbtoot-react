import "./IntroText.css";

type IntroTextProps = {
  onEnd: () => void;
};

const IntroText = ({ onEnd }: IntroTextProps) => {
  return (
    <div className="intro-text">
      <h1 className="kynki" data-text="KYNKI">KYNKI</h1>

      <button data-text="Enter" onClick={onEnd}>
        Enter
      </button>
    </div>
  );
};

export default IntroText;
