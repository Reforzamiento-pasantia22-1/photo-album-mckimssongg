import React from "react";
import { HiUserCircle } from "react-icons/hi";
import Store from "../store/index";
import { open } from "../store/actions/actions_modal";

function Sing_in() {
  return (
    <button
      className=" btn text-white"
      onClick={() => {
        Store.dispatch(open);
      }}
    >
      <div className="d-flex align-items-center">
        <HiUserCircle />
        Sing In
      </div>
    </button>
  );
}

export default Sing_in;
