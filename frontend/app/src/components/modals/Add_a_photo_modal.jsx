import React from "react";
import FetchData from "../../services/Api";
import { useSelector, useDispatch } from "react-redux";
import { closed } from "../../store/actions/actions_modal";
import { loginFailure, loginSuccess } from "../../store/actions/actions_login";

function Add_a_photo_modal() {
  const dispatch = useDispatch();
  const [ver, setVer] = React.useState(false);
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const getData = FetchData.getInstance();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = await getData.fetchWithoutToken(
      "users/login",
      "POST",
      data
    );
    console.log(loginData);
    if (loginData.auth) {
      dispatch(loginSuccess(loginData));

      window.location.reload();
      dispatch(closed());
    } else {
      dispatch(loginFailure(loginData));
    }
  };

  return (
    <div
      className="form-bg bg-primary d-flex flex-column align-items-center "
      style={{ width: "100%", maxWidth: "600px" }}
    >
      <h3 className="title text-center m-4">Add a photo 📷</h3>
      <form
        onSubmit={handleSubmit}
        className="form-horizontal d-flex flex-column "
        style={{ width: "80%", maxWidth: "600px" }}
      >
        <div className="form-group m-2 ">
          <label>Label of photo *</label>
          <input
            className="form-control"
            type="text"
            name="label"
            onChange={handleChange}
          />
        </div>
       
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-outline-light m-3 w-50">log In</button>
          <button
            className="btn btn-outline-dark m-3 w-50"
            onClick={() => {
              setVer(true);
            }}
          >
            Sing Up
          </button>
        </div>
        <button
          className="btn btn-primary m-3 "
          onClick={() => {
            dispatch(closed);
          }}
        >
          Canceled
        </button>
      </form>
    </div>
  );
}

export default Add_a_photo_modal;
