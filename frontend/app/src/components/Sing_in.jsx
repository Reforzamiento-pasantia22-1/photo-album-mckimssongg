import React from "react";
import {HiUserCircle} from "react-icons/hi";
import Store from "../store/index";
import { open } from '../store/actions/actions_modal' 

function Sing_in() {
  return (
    <button className="d-flex align-items-center btn text-white" 
    onClick={()=>{
      Store.dispatch(open)
    }}>
      <HiUserCircle />
      Sing In
    </button>
  );
}

export default Sing_in;
