import React from "react";
//redux
import { connect } from "react-redux";
import authUser from "../../utils/auth";

// Components
import { Modal } from "../modals/index";
import Form_login from "../Form_Login";
import Logout_modal from "../Logout_modal";
import Sing_in from "../Sing_in";
import Search from "../Search";
import Add_a_photo_button from "../Add_a_photo_button";
import Logout_button from "../Logout_button";
import { FiSearch } from "react-icons/fi";

const mapStateToProps = (state) => {
  return {
    visibility: state.visibilityModal.visibility
  };
};

function Navbar({ visibility }) {
  const auth = authUser.getInstance();
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid justify-content-between ">
          <div className="d-flex align-items-center">
            {auth.dataUser.auth ? (
              <Logout_button name={auth.dataUser.user.username} />
            ) : (
              <Sing_in />
            )}
            {auth.dataUser.auth ? (
              <Add_a_photo_button color={"info"} />
            ) : (
              <Add_a_photo_button color={"secondary disabled"} />
            )}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FiSearch />
          </button>
        </div>
        <div className="collapse navbar-collapse my-3 w-50" id="navbarColor01">
          <Search />
        </div>
      </nav>
      {visibility && (
        <Modal>{auth.dataUser.auth ? <Logout_modal /> : <Form_login />}</Modal>
      )}
    </React.Fragment>
  );
}


export default connect(mapStateToProps,null)(Navbar);
