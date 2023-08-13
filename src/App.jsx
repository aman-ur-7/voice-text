import React, { useState, useEffect } from "react";
import Home from "./Home";
import RenderPage from "./RenderPage";

const App = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 6000);
  // }, []);

  // return <>{loading == false ? <Home /> : <RenderPage />}</>;
  // return (
  //   <>
  //     <RenderPage />
  //   </>
  // );

  return <Home />;
};

export default App;
