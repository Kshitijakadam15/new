import React from "react";
import "./First.css";

const Heart = () => {
  const heartStyle = {
    position: "relative",
    width: "100vw",
    height: "100px",
    animation: "heartbeat 1s infinite",
  };

  const loveStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  };

  const keyframes = `
        @keyframes heartbeat {
            0% {
                transform: scale(0.95);
                opacity: 0.7;
            }
            5% {
                transform: scale(1.05);
                opacity: 1;
            }
            15% {
                transform: scale(0.95);
                opacity: 0.7;
            }
            20% {
                transform: scale(1);
                opacity: 1;
            }
            100% {
                transform: scale(0.95);
                opacity: 0.7;
            }
        }
    `;

  return (
    <div style={heartStyle}>
      <style>{keyframes}</style>
      <div style={loveStyle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 502.98 108.61"
        >
          <path
            id="heart"
            d="M213.35 29.43c19.41-15.19 33.68 10.86 37.73 18.82-.28-13.61 11.64-40.98 25.94-34.01 32.3 15.74-15.88 83.8-26.4 81.76-13.24-9-51.35-53.3-37.27-66.57Z"
            style={{
              fill: "#00ffff",
              stroke: "#00ffff",
              strokeWidth: "1.5",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterlimit: "4",
              strokeDasharray: "none",
              strokeOpacity: "1",
            }}
          />
          <path
            pathLength="1"
            id="line"
            d="M5.32 78.13c.96-.01 5-8.5 5.54-8.54.58-.05 6.1 8.51 7.1 8.51 3.66 0 9.29.06 10.71.05 2.53-.01 4.82-72.88 4.82-72.88l4.76 97.28 3.97-24.45 20.45-.22C64 77.86 77.1 63.66 78.36 63.8c1.31.15 6.68 14.08 7.94 14.07 2.3-.03 33.32.04 35.76.02.96 0 5-8.5 5.53-8.53.59-.05 6.1 8.51 7.1 8.5 3.66 0 9.3.07 10.72.06 2.53-.02 4.81-72.89 4.81-72.89l4.77 97.28 3.97-24.44s83.34-3.33 74.69 7.67c-8.65 11-45.3-42.94-31.65-53.58 25.6-19.96 49.96 36.94 40.26 36.5-12.2-.53 1.8-62.32 23.41-51.7 32.24 15.86-17.56 84.92-26.4 81.77-5.73-2.05-.68-21.68 31.4-26.58 26.65-6.42 29.5 2.35 52.62 7.11 2.53-.02 4.82-72.89 4.82-72.89l4.76 97.28 3.97-24.44 20.45-.22c1.31-.02 14.41-14.22 15.68-14.07 1.32.15 6.7 14.08 7.95 14.07 2.29-.03 33.32.04 35.76.02.95 0 5-8.5 5.53-8.54.58-.04 6.1 8.52 7.1 8.52 3.66 0 9.3.06 10.72.05 2.53-.02 4.81-72.89 4.81-72.89l4.77 97.28 3.97-24.44 20.45-.23c1.31-.01 14.4-14.22 15.68-14.07 1.32.16 6.69 14.09 7.94 14.07"
          />
        </svg>
      </div>
    </div>
  );
};

export default Heart;
