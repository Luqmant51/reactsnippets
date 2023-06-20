import "./assets/css/bootstrap.min.css";
import "./assets/css/icofont.min.css";
import "./assets/css/animate.min.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

import React, { useState, useEffect } from "react";
import AppRouter from "./Routes";
import Preloader from "./components/Shared/Preloader";

function App() {
  const [loading, setLoading] = useState(true);
  const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  };

  useEffect(() => {
    demoAsyncCall().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? <Preloader /> : ""}
      <AppRouter />
    </>
  );
}

export default App;
