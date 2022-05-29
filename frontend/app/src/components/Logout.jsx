import React from "react";
import {RiLogoutBoxFill} from "react-icons/ri";

function Logout({name}) {
  return (
    <button className="d-flex align-items-center btn text-white" >
      <RiLogoutBoxFill />
      {name}
    </button>
  );
}

export default Logout;
