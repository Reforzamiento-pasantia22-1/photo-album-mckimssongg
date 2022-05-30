import React from "react";
import { RiLogoutBoxFill } from "react-icons/ri";
import Store from "../store/index";
import { open } from "../store/actions/actions_modal";



function Logout({ name }) {
  return (
    <button
      className="btn btn-outline-light me-3 btn-lg"
      onClick={() => {
        Store.dispatch(open);
      }}
    >
      <RiLogoutBoxFill />
      {name}
    </button>
  );
}

export default Logout;
