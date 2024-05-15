// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./Users";
import CreateUsers from "./CreateUser";
import UpdateUsers from "./UpdateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />}>
          {" "}
        </Route>
        <Route path="/create" element={<CreateUsers />}>
          {" "}
        </Route>
        <Route path="/update/:id" element={<UpdateUsers />}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
