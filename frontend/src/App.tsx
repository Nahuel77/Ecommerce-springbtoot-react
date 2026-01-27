import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import IntroVideo from "./components/intro/IntroVideo";
import IntroText from "./components/intro/IntroText";

type IntroPhase = "video" | "text" | "done";

function App() {
  const [phase, setPhase] = useState<IntroPhase>("video");

  useEffect(() => {
    const seen = localStorage.getItem("introSeen");
    // if (seen) setPhase("done");
  }, []);

  const handleVideoEnd = () => {
    setPhase("text");
  };

  const handleTextEnd = () => {
    localStorage.setItem("introSeen", "true");
    setPhase("done");
  };

  if (phase === "video") {
    return <IntroVideo onEnd={handleVideoEnd} />;
  }

  if (phase === "text") {
    return <IntroText onEnd={handleTextEnd} />;
  }

  return <>
    <Nav/>
    <Home />
  </>
}

export default App;
