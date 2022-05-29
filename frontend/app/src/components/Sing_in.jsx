import React from "react";
import {HiUserCircle} from "react-icons/hi";

function Sing_in() {
  return (
    <button className="d-flex align-items-center btn text-white" 
    onClick={()=>{
      window.location.reload();
    }}>
      <HiUserCircle />
      Sing In
    </button>
  );
}

export default Sing_in;
