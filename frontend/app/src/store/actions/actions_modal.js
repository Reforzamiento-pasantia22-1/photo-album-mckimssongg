import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_MODAL_ADD_PHOTO,
  CLOSE_MODAL_ADD_PHOTO,
} from "../constants/index";

const open = {
  type: OPEN_MODAL,
};

const closed = {
  type: CLOSE_MODAL,
};

const open_modal_add_photo = {
  type: OPEN_MODAL_ADD_PHOTO,
};

const closed_modal_add_photo = {
  type: CLOSE_MODAL_ADD_PHOTO,
};
export { open, closed, open_modal_add_photo, closed_modal_add_photo };
