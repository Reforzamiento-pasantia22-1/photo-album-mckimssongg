import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from "../constants/index";

const fetchImagesSuccess = (data) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    data,
  };
};

const fetchImagesFailure = (error) => {
  return {
    type: FETCH_IMAGES_FAILURE,
    error,
  };
};

export { fetchImagesSuccess, fetchImagesFailure };
