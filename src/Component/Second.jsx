import React from "react";
import { useState } from "react";
import './First.css';
import { useNavigate } from "react-router-dom";

const Second = () => {
  const navigate = useNavigate();
  const navigatethird = () => {
    navigate("/third");
  };
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleNoButtonClick = () => {
    setButtonClicked(true);
  };
  const animationStyles = `
    @keyframes moveButton {
      0% { transform: translateY(0px); }
      100% { transform: translateY(-1000px); }
    }
  `;
  const buttonAnimation = buttonClicked
    ? { animation: "moveButton 20s ease" }
    : {};
  const styles = {
    centered: {
      width: "95%",
      maxWidth: "600px",
      textAlign: "center",
      alignItems: "center",
      marginRight:'130px',
      marginTop: "50%", // Adjusted for better mobile positioning
    },
    h4: {
      color: "#FFFFFF",
      fontSize: "2em", // Adjusted for better mobile readability
      fontWeight: "bold",
      marginBottom: "20px",
    },
    buttons: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    no: {
      padding: "15px 30px", // Increased padding for easier tapping
      borderRadius: "8px",
      backgroundColor: "#D8124B",
      transition: "transform 0.3s ease",
      marginBottom: "10px",
      fontSize: "1.5em",
      color: "#FFFFFF",
      cursor: "pointer",
    },
    yes: {
      padding: "15px 30px", // Increased padding for easier tapping
      borderRadius: "8px",
      backgroundColor: "#12D890",
      transition: "transform 0.3s ease",
      fontSize: "1.5em",
      color: "#FFFFFF",
      cursor: "pointer",
    },
    signature: {
      marginTop: "20px",
      color: "#FFFFFF",
    },
    p: {
      marginTop: "20px", // Adjusted for better mobile positioning
      fontFamily: "Helvetica, Arial, Sans-Serif",
      fontSize: "0.85em",
    },
  };
  
  // Media queries for different viewport sizes
  const mediaQueries = {
    '@media (max-width: 767px)': {
      centered: {
        marginTop: "10%", // Adjusted for better mobile positioning
      },
      h4: {
        fontSize: "1.5em", // Adjusted for better mobile readability
        marginBottom: "15px",
      },
      no: {
        padding: "12px 25px", // Adjusted for easier tapping on smaller screens
        marginBottom: "8px",
      },
      yes: {
        padding: "12px 25px", // Adjusted for easier tapping on smaller screens
      },
      signature: {
        marginTop: "15px",
      },
      p: {
        marginTop: "15px",
      },
    },
    '@media (min-width: 768px)': {
      buttons: {
        flexDirection: "row",
      },
      no: {
        marginLeft: "10px",
        marginBottom: "0",
      },
    },
  };
  
  const mergedStyles = {...styles, ...mediaQueries};

  return (
    <div className="flex justify-center">
      <style>{animationStyles}</style>
      <div style={mergedStyles.centered}>
        <h4 style={mergedStyles.h4}>Will you Marry Me 💍 ?</h4>
        <div style={mergedStyles.buttons}>
          <button
            style={{ ...mergedStyles.no, ...buttonAnimation }}
            onClick={handleNoButtonClick}
          >
            No
          </button>
          <button style={mergedStyles.yes} onClick={navigatethird}>
            Yes
          </button>
        </div>
        <div style={mergedStyles.signature}>
          <p style={mergedStyles.p}>Made with ❤️ by Kshitija</p>
        </div>
      </div>
    </div>
  );
};

export default Second;
