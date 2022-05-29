import React from "react";
import {RiLogoutBoxFill} from "react-icons/ri";
import Store from "../store/index";
import { open } from '../store/actions/actions_modal'

function Logout({name}) {
  return (
    <button className="d-flex align-items-center btn text-white" onClick={ () => {
      Store.dispatch(open)
    }}>
      <RiLogoutBoxFill />
      {name}
    </button>
  );
}

export default Logout;
