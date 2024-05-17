// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useParams } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import "./style.css";

function UpdateUser() {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState();
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState();
  // eslint-disable-next-line no-unused-vars
  const [phone, setPhone] = useState();
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((resilt) => {
        console.log(resilt);
        setName(resilt.data.name);
        setEmail(resilt.data.email);
        setPhone(resilt.data.phone);
      })
      .catch((err) => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, { name, email, phone })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2
            style={{
              marginBottom: "50px",
              display: "flex",
              fontWeight: "bold",
            }}
          >
            Update Employee
          </h2>
          <div className="mb-2">
            <label style={{ margin: "10px", display: "flex" }} htmlFor="">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label style={{ margin: "10px", display: "flex" }} htmlFor="">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label style={{ margin: "10px", display: "flex" }} htmlFor="">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "left",
            }}
            className="btnStyleCase"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
