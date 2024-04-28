import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <form
        className="signup-form flex col"
        onSubmit={handleSubmitForm}
        autoComplete="off"
      >
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ahmadaamir@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
        <p>
          Don't have an account? <Link to={"/signup"}>Signup</Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
