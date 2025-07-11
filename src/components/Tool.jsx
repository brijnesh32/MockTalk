import React from "react";
import "../css/Tools.css"; // optional custom CSS


const Tools = () => {
  const showAndCenterDiv = () => {
    // Custom logic for modal or action
    console.log("Show tool");
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center fw-bold text-primary mb-5 display-5">
          Introducing <br /> MockTalk.AI Ad Tools
        </h2>

        {/* Tool 1: Headline Generator */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://fyx.ai/static/videoanalyzer.png"
              alt="Headline Generator"
              className="img-fluid rounded-4 shadow tool-img"
              style={{ height: "25rem", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold text-primary">AI-Powered<br />Headline Generator</h3>
            <p className="text-muted fs-5">
              Craft high-converting headlines in seconds. Our AI analyzes your product,
              tone, and target audience to generate compelling headlines that capture attention and drive clicks.
              Say goodbye to writer’s block and hello to performance-focused creativity powered by data.
            </p>
            <button onClick={showAndCenterDiv} className="btn btn-primary px-4 py-2 fw-semibold shadow-sm">
              Try Now
            </button>
          </div>
        </div>

        {/* Tool 2: Facebook Ad Mockup */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://fyx.ai/static/facebookadmockup.png"
              alt="Facebook Ad Mockup"
              className="img-fluid rounded-4 shadow tool-img"
              style={{ height: "25rem", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold text-primary">Instant<br />Facebook Ad Mockups</h3>
            <p className="text-muted fs-5">
              Visualize your ad creatives before they go live. With our Facebook Ad Mockup tool, you can experiment
              with visuals, copy, and layout in real-time—ensuring every ad looks perfect and performs better across Meta platforms.
            </p>
            <button onClick={showAndCenterDiv} className="btn btn-primary px-4 py-2 fw-semibold shadow-sm">
              Try Now
            </button>
          </div>
        </div>

        {/* Tool 3: Video Ad Analyzer */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://fyx.ai/static/headlinegen.png"
              alt="Video Ad Analyzer"
              className="img-fluid rounded-4 shadow tool-img"
              style={{ height: "25rem", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold text-primary">Smart<br />Video Ad Analyzer</h3>
            <p className="text-muted fs-5">
              Upload your video and let our AI break it down. Identify strong and weak segments, get suggestions on improving engagement,
              and receive data-backed performance predictions. Make every second count with intelligent video insights.
            </p>
            <button onClick={showAndCenterDiv} className="btn btn-primary px-4 py-2 fw-semibold shadow-sm">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
