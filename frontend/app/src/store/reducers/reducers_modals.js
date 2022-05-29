import { OPEN_MODAL, CLOSE_MODAL } from "../constants/index";

function visibilityModal(state = false, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        visibility: true,
      };
    case CLOSE_MODAL:
      return {
        visibility: false,
      };
    default:
      return state;
  }
}

export { visibilityModal };
