import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../Theme/Darkatheme";
import { lightTheme } from "../Theme/Lighttheme";
import Second from "../Component/Second";
import Third from "../Component/Third";
import One from "../Component/One";

import backgroundMusic from "../Assets/Shayarana - Daawat-e-Ishq 128 Kbps.mp3";
import ReactPlayer from "react-player";

const Routing = () => {
  const location = useLocation();
  const isDarkThemeRoute = location.pathname === "/second";

  return (
    <ThemeProvider theme={isDarkThemeRoute ? darkTheme : lightTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<One />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Routes>

      <ReactPlayer
        url={backgroundMusic}
        playing={true}
        loop={true}
        volume={0.8}
        controls={false}
      />
    </ThemeProvider>
  );
};

export default Routing;
