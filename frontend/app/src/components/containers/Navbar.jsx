import React from "react";
import Sing_in from "../Sing_in";
import Search from "../Search";
import { FiSearch } from "react-icons/fi";
import Add_a_photo_button from "../Add_a_photo_button";
import Logout from "../Logout";
import { Modal } from "../modals/index";
import Form_login from "../Form_Login";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    visibility: state.visibilityModal.visibility,
  };
};

function Navbar({ visibility }) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid justify-content-between ">
          <div className="d-flex align-items-center">
            {false ? <Logout name={"Persona"} /> : <Sing_in />}
            {true ? (
              <Add_a_photo_button color={"info"} />
            ) : (
              <Add_a_photo_button color={"secondary"} />
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
        <div className="collapse navbar-collapse my-2 w-50" id="navbarColor01">
          <Search />
        </div>
      </nav>
      {visibility && (
        <Modal>
          <Form_login />
        </Modal>
      )}
    </React.Fragment>
  );
}

export default connect(mapStateToProps, { open, closed })(Navbar);
