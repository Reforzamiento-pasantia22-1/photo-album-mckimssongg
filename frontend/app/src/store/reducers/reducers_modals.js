import { OPEN_MODAL, CLOSE_MODAL } from "../constants/index";

const initialState = {
  visibility: false,
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
    default:
      return state;
  }
}

export { visibilityModal };
