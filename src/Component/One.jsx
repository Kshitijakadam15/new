import React from "react";
import { useNavigate } from "react-router-dom";

const One = () => {
  const navigate = useNavigate();
  const navigatesec = () => {
    navigate("/second");
  };
  const styles = {
    button: {
        padding: "15px 30px", // Increased padding for easier tapping on mobile
        borderRadius: "8px",
        backgroundColor: "#D8124B",
        fontSize: "1.5em",
        color: "#FFFFFF",
        cursor: "pointer",
        marginTop:'20vh',
        marginLeft:'15vh',
        marginBottom: "20px", // Adjusted for better spacing on mobile
      }
  }

  return (
    <div>
      <div className="mt-64">
        <button style={styles.button} onClick={navigatesec}>
          Ready!
        </button>
      </div>
    </div>
  );
};

export default One;
