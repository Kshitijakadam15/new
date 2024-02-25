import React from "react";
import { useNavigate } from "react-router-dom";
import Heart from "./Heart";
import "./First.css";

const First = () => {
  const navigate = useNavigate();

  const navigatesec = () => {
    navigate("/second");
  };

  const styles = {
    centered: {
      width: "100%",
      textAlign: "center",
      marginTop: "30vh", // Adjusted for better vertical alignment on mobile
      padding: "0 20px", // Adjusted for better spacing
    },
    h4: {
      color: "#000000",
      fontSize: "2em", // Adjusted for better readability on mobile
      fontWeight: "bold",
      marginRight:'150px',
      marginBottom: "10px", // Adjusted for better spacing on mobile
    },
    heartContainer: {
      marginTop: "20px", // Adjusted for better spacing on mobile
    },
    button: {
      padding: "15px 30px", // Increased padding for easier tapping on mobile
      borderRadius: "8px",
      backgroundColor: "#D8124B",
      fontSize: "1.5em",
      color: "#FFFFFF",
      cursor: "pointer",
      marginRight:'150px',
      marginTop:'50px',
      marginBottom: "20px", // Adjusted for better spacing on mobile
    },
    signature: {
      marginTop: "20px",
      color: "#000000",
      fontSize: "0.85em",
    },
    
    
  };

  return (
    <div className="flex justify-center">
      <div style={styles.centered}>
        <h4 style={styles.h4}>READY?</h4>
        <div style={styles.heartContainer}>
          <Heart />
        </div>
        <button style={styles.button} onClick={navigatesec}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default First;
