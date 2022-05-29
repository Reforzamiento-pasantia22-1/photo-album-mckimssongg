import React from "react";
import { MdAdd } from "react-icons/md";

function Add_a_photo_button({color}) {
  return (
    <div>
      <button
        type="button"
        className={`btn btn-${color} d-flex align-items-center`}
      >
        <MdAdd/> Add a photo
      </button>
    </div>
  );
}

export default Add_a_photo_button;
