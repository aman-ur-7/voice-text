import React from "react";

const Home = () => {
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
          <div>
            <textarea name="textarea" rows="10" cols="70"></textarea>
          </div>
          <div className="buttons">
            <button>Copy to clipboard</button>
            <button>Start listening</button>
            <button>Stop listening</button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
