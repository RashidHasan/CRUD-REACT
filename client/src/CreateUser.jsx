  // eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

function CreateUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("https://crud-react-ri5o.vercel.app/createUser", { name, email, phone })
        // eslint-disable-next-line no-unused-vars
      .then((result) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Employee</h2>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUsers;