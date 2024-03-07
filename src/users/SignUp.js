import React, { useState } from "react";
import baseURL from "../config";
const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const clickSubmit = async (e) => {
    e.preventDefault();
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
    };
    try {
      let response = await fetch(baseURL + "/api/users/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      return await response.json();
    } catch (err) {
      console.log(err);
    } finally {
      alert("User registerred successfully");
      setValues({
        name: "",
        password: "",
        email: "",
      });
    }
  };
  return (
    <div>
      <h1>SignUp</h1>
      <div>
        <form>
          <input
            type="text"
            label="Name"
            value={values.name}
            onChange={handleChange("name")}
          />
          <input
            type="email"
            label="Email"
            value={values.email}
            onChange={handleChange("email")}
          />
          <input
            type="password"
            label="Password"
            value={values.password}
            onChange={handleChange("password")}
          />
          <button
            onClick={(e) => {
              clickSubmit(e);
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
