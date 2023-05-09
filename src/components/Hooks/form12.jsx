import React, { useState } from "react";
//import "./styles.css";

export default function Form12() {
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (event) => {
    console.log("mostrar campos html...")
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("objeto Javascript: ", state);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
