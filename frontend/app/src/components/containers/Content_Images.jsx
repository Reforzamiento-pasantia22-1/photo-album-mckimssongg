import React from "react";
import '../../assets/css/Content_Images.css'
import { useSelector, useDispatch } from "react-redux";
import Image from "../Image";

function Content_Images() {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.reducer_images.images);
  return (
    <React.Fragment>
      <section id="Gallery" className="m-3">
        <div className="row">
          {images.map((image) => (
            <Image key={image.id} src={image.link} alt={image.label} is_activate={image.is_activate}/>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Content_Images;
