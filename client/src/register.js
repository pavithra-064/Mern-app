import React from "react";
import "./App.css";
import history from "./history";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const submitreg = () => {
    alert("successful!");
    Axios.post("/api/register", {
      username: username,
      password: password,
      useremail: useremail,
    }).then((res) => {
      alert("successful");
    });
    history.push("/");
  };

  return (
    <div className="regie">
      <div className="App">
        <h1>REGISTER </h1>
        <div className="form1">
          <label className="labell">USERNAME:</label>
          <input
            type="text"
            name="user_name"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label className="labell">NAME:</label>
          <input type="text" name="name" />
          <label className="labell">EMAIL:</label>
          <input
            type="email"
            name="user_email"
            onChange={(e) => {
              setUseremail(e.target.value);
            }}
          />
          <label className="labell">PASSWORD:</label>
          <input
            type="text"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button target="_blank" onClick={submitreg}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
