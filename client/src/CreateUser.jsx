// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

function CreateUsers() {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState();
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState();
  // eslint-disable-next-line no-unused-vars
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://crud-react-ri5o-n2qtifvg5-rashids-projects-da3a7bb7.vercel.app/createUser",
        { name, email, phone }
      )
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2
            style={{
              marginBottom: "50px",
              display: "flex",
              fontWeight: "bold",
            }}
          >
            Add Employee
          </h2>
          <div className="mb-2">
            <label style={{ margin: "10px", display: "flex" }} htmlFor="">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
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
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "left",
              marginTop: "30px",
            }}
            className="btnStyleCase"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUsers;
