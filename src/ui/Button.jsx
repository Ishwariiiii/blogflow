import React from "react";
import "./Button.css"
const Button = ({ icon }) => {
  console.log(icon, "iconsss")
  return <div>

    <div className="like-button  flex items-center justify-center">
      <h6 className="text-white text-2xl ">{icon}</h6>
    </div>

  </div>;
};

export default Button;

