import React from "react";
import { useState } from "react";
import "./First.css";
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

  return (
    <div className="flex justify-center centered">
      <div>
        <h4 className="h4 ">Will you Marry Me 💍 ?</h4>
        <div>
          <button className="no" onClick={handleNoButtonClick}>
            No
          </button>
          <button className="yes" onClick={navigatethird}>
            Yes
          </button>
        </div>
        <div className="signature">
          <p >Made with ❤️ by Kshitija</p>
        </div>
      </div>
    </div>
  );
};

export default Second;
