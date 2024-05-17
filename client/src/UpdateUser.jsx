  // eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
  // eslint-disable-next-line no-unused-vars
import { useParams, useNavigate } from "react-router-dom";
  // eslint-disable-next-line no-unused-vars
import axios from "axios";
import "./style.css";

function UpdateUser() {
    // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
    // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState('');
    // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState('');
    // eslint-disable-next-line no-unused-vars
  const [phone, setPhone] = useState('');
    // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://crud-react-ri5o.vercel.app/getUser/${id}`)
      .then((result) => {
          // eslint-disable-next-line no-unused-vars
        setName(result.data.name);
        setEmail(result.data.email);
        setPhone(result.data.phone);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`https://crud-react-ri5o.vercel.app/updateUser/${id}`, { name, email, phone })
        // eslint-disable-next-line no-unused-vars
      .then((result) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Update}>
          <h2>Update Employee</h2>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;