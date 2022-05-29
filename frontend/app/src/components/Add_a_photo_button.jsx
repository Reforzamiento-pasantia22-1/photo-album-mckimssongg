import React from "react";

function Add_a_photo_button({color}) {
  return (
    <div>
      <button
        type="button"
        className={`btn btn-${color} `}
      >
        Add a photo
      </button>
    </div>
  );
}

export default Add_a_photo_button;
