import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Home = () => {
  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
  };
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <section className="main-section">
      <section>
        <div className="main-content">
          <h1>Speech to Text Convertor</h1>
          <p>
            A react hook which convert's voice into text . These gonna help many
            of you and you can also translate these and copy from the webiste
          </p>
        </div>
        <div className="voice-area">
          <div>{transcript}</div>
          <div className="buttons">
            <button>Copy to clipboard</button>
            <button onClick={startListening}>Start listening</button>
            <button onClick={SpeechRecognition.stopListening}>
              Stop listening
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
