import React from "react";
import { RiLogoutBoxFill } from "react-icons/ri";
import Store from "../store/index";
import { connect } from "react-redux";
import { open } from "../store/actions/actions_modal";

const mapStateToProps = (state) => {
  return {
    auth: state.reducer,
  };
};

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

export default connect(mapStateToProps, { open })(Logout);
