import React from "react";
import FetchData from "../../services/Api";
import authUser from "../../utils/auth";
import { useSelector, useDispatch } from "react-redux";
import { closed_modal_add_photo } from "../../store/actions/actions_modal";

function Add_a_photo_modal() {
  const user = authUser.getInstance();
  const dispatch = useDispatch();
  const getData = FetchData.getInstance();
  const [dataAlbums, setDataAlbums] = React.useState([]);

  const getDataAlbums = async () => {
    const response = await getData.fetch(
      `albums/albums/?userId=${user.dataUser.user.id}`,
      "GET"
    );
    console.log(response);
    setDataAlbums(response);
  };
  const [ver, setVer] = React.useState(false);
  const [data, setData] = React.useState({
    label: "",
    description: "",
    link: "",
    album: 0,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await getData.fetch("albums/image/", "POST", data);
    console.log(response);
    if (response.is_activate) {
      dispatch(closed_modal_add_photo);
    }
  };

  React.useEffect(() => {
    getDataAlbums();
  }, []);

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
        <div className="form-group m-2 ">
          <label>Description *</label>
          <input
            className="form-control"
            type="text"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group m-2 ">
          <label>Link *</label>
          <input
            className="form-control"
            type="text"
            name="link"
            onChange={handleChange}
          />
        </div>
        <div className="form-group m-2 ">
          <label>Album *</label>
          <select className="form-control" name="album" onChange={handleChange}>
            <option value="0">Select an album</option>
            {dataAlbums.map((album) => (
              <option key={album.id} value={album.id}>
                {album.name}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-outline-light m-3 w-50">Add</button>
          <button
            type="button"
            className="btn btn-outline-dark m-3 w-50"
            onClick={() => {
              setVer(true);
            }}
          >
            New Album
          </button>
        </div>
        <button
          className="btn btn-primary m-3 "
          onClick={() => {
            dispatch(closed_modal_add_photo);
          }}
        >
          Canceled
        </button>
      </form>
    </div>
  );
}

export default Add_a_photo_modal;
