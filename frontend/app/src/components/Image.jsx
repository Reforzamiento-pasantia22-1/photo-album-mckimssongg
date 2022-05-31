import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import "../assets/css/Content_Images.css";

function Image({ src, alt, is_activate }) {
  return (
    <div
      data-aos="fade-up"
      className="col-12 col-md-6 col-lg-4 col-xl-3 content-image"
    >
      <img src={src} alt={alt} />
      <p>{alt}</p>
      {is_activate ? (
        <button className="btn btn-danger">
          <RiDeleteBin6Fill />
        </button>
      ) : null}
    </div>
  );
}
export default Image;
