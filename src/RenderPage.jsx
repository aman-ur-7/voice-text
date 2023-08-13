import React, { useState, CSSProperties } from "react";
// import RiseLoa from "react-spinners/ClipLoader";
import PropagateLoader from "react-spinners/PropagateLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

const RenderPage = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <main>
      <div className="sweet-loading">
        <PropagateLoader
          color={color}
          loading={loading}
          size={17}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </main>
  );
};

export default RenderPage;
