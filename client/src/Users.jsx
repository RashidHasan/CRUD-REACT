// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

function Users() {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((resilt) => setUsers(resilt.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((errr) => console.log(errr));
  };

  return (
    <>
      <div
        style={{ backgroundColor: "dimgray" }}
        className="d-flex vh-100  justify-content-center align-items-center"
      >
        <div className="cardIphone">
          <div className="btn1"></div>
          <div className="btn2"></div>
          <div className="btn3"></div>
          <div className="btn4"></div>
          <div className="card-int">
            <div className="hello">
              Hello Univer
              <span className="hidden">
                <br></br> I&apos;m <br></br> Rashid Hasan <br></br>{" "}
                &apos;Software Engineer&apos;
              </span>
            </div>
          </div>
          <div className="top">
            <div className="camera">
              <div className="int"></div>
            </div>
            <div className="speaker"></div>
          </div>
        </div>
        <div className="BoxCRUD">
          {/* <Link
            style={{
              marginBottom: "10px",
              transform: "translateX(-223px)",
              padding: "10px",
            }}
            to="/create"
            className="btnStyleCase"
          >
            Add +
          </Link> */}

          <a href="/create">
            <button
              style={{
                marginBottom: "10px",
              }}
              to="/create"
              className="btnStyleCase"
            >
              Add Employee
            </button>
          </a>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                // eslint-disable-next-line no-unused-vars
                users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        {/* <Link
                          style={{
                            margin: "10px",
                          }}
                          to={`/update/${user._id}`}
                          className="btnStyleCase"
                        >
                          Update
                        </Link> */}

                        <a href={`/update/${user._id}`}>
                          <button
                            style={{
                              margin: "10px",
                            }}
                            to={`/update/${user._id}`}
                            className="btnStyleCase3"
                          >
                            Update
                          </button>
                        </a>
                        <button
                          className="btnStyleCase2"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
