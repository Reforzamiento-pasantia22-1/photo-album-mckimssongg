import React from "react";
import Store from "../store";
import { closed } from "../store/actions/actions_modal";
import { loginFailure } from "../store/actions/actions_login";
function Logout_modal() {
  return (
    <div
      className="form-bg bg-primary d-flex flex-column align-items-center rounded"
      style={{ width: "100%", maxWidth: "600px" }}
    >
      <h3 className="title text-center mt-4">¿log out now?</h3>
      <div className="d-flex w-100 px-4 justify-content-evenly">
        <button
          className="btn btn-danger my-3 w-50"
          onClick={() => {

            Store.dispatch(
              loginFailure({
                message: "log out success",
                auth: false,
              })
            );
            window.location.reload();
            Store.dispatch(closed);
          }}
        >
          log out
        </button>
        <button
          className="btn btn-primary my-3 "
          onClick={() => {
            Store.dispatch(closed);
          }}
        >
          Canceled
        </button>
      </div>
    </div>
  );
}

export default Logout_modal;
