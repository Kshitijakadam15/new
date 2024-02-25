import React from "react";

const Navigate = () => {
  const url = "https://proposeme.netlify.app/Ashish"; // URL to navigate to

  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div>
      <button onClick={handleClick}>Click !</button>
    </div>
  );
};

export default Navigate;
