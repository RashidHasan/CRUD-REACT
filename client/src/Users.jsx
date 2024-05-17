  // eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Users() {
    // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://crud-react-ri5o.vercel.app")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://crud-react-ri5o.vercel.app/deleteUser/${id}`)
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-75 bg-white rounded p-3">
        <Link to="/create" className="btn btn-primary mb-3">Add Employee</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/update/${user._id}`} className="btn btn-warning">Update</Link>
                  <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;