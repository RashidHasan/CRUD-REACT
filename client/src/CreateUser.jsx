// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

function CreateUsers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { name, email, phone })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    Submit(e);
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
          <Link
            to="#"
            onClick={handleLinkClick}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "left",
              marginTop: "30px",
            }}
            className="btnStyleCase"
          >
            Submit
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreateUsers;
