import React, { useState } from "react";
import { signin } from "./api-auth";
import auth from "./auth-helper";
const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const clickSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };
    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values });
      } else {
        auth.authenticate(data, () => {
          setValues({ ...values });
        });
        setValues({
          email: "",
          password: "",
        });
      }
    });
  };
  return (
    <div>
      <h1>SignUp</h1>
      <div>
        <form>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
