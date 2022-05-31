import React from "react";
import "../../assets/css/Content_Images.css";
import FetchData from "../../services/Api";
import authUser from "../../utils/auth";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchImagesFailure,
  fetchImagesSuccess,
} from "../../store/actions/actions_images";
import Image from "../Image";

function Content_Images() {
  const dispatch = useDispatch();
  const getData = FetchData.getInstance();
  const auth = authUser.getInstance();
  const images = useSelector((state) => state.reducer_images.images);

  const fetchImages = async () => {
    const data = await getData.fetch(
      `albums/searchImage/?userId=${auth.dataUser.user.id}`,
      "GET"
    );
    dispatch(fetchImagesSuccess(data));
  };

  React.useEffect(() => {
    fetchImages();
  }, []);
  return (
    <React.Fragment>
      <section id="Gallery" className="m-3">
        <div className="row">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.link}
              alt={image.label}
              is_activate={image.is_activate}
            />
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Content_Images;
