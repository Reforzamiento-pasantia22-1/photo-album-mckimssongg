import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_MODAL_ADD_PHOTO,
  CLOSE_MODAL_ADD_PHOTO,
} from "../constants/index";

const initialState = {
  visibility: false,
  visibility_add_photo: false,
};

function visibilityModal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        visibility: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        visibility: false,
      };
    case OPEN_MODAL_ADD_PHOTO:
      return {
        ...state,
        visibility_add_photo: true,
      };
    case CLOSE_MODAL_ADD_PHOTO:
      return {
        ...state,
        visibility_add_photo: false,
      };

    default:
      return state;
  }
}

export { visibilityModal };
