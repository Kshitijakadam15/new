import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "../Theme/Darkatheme";
import { lightTheme } from "../Theme/Lighttheme";
import ReactPlayer from "react-player";
import First from "../Component/First";
import Second from "../Component/Second";
import Third from "../Component/Third";

import backgroundMusic from "../Assets/Shayarana - Daawat-e-Ishq 128 Kbps.mp3";

const Routing = () => {
  const location = useLocation();
  const isDarkThemeRoute = location.pathname === "/second";

  return (
    <ThemeProvider theme={isDarkThemeRoute ? darkTheme : lightTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<First />} />
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
