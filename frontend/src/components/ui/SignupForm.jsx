import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profilePic: null, // Added for file input
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profilePic: file });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
// 0030
// MEZNPKKA
  return (
    <>
      <form
        className="signup-form flex col"
        onSubmit={handleSubmitForm}
        autoComplete="off"
      >
        <input
          type="file"
          name="profilePic"
          id="profilePic"
          onChange={handleFileChange}
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Ahmad Aamir"
          value={formData.username}
          onChange={handleInputChange}
        />
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
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </>
  );
};

export default SignupForm;
