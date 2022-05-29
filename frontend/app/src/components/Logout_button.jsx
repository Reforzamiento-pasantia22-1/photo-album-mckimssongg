import React from "react";
import {RiLogoutBoxFill} from "react-icons/ri";
import Store from "../store/index";
import {connect} from "react-redux";
import { open } from '../store/actions/actions_modal'

const mapStateToProps = (state) => {
  return {
    auth: state.reducer
  };
};


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

export default connect(mapStateToProps, { open })(Logout);
