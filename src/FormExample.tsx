import React, { useState } from "react";

const FormExample = () => {
  // Define state variables to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Function to handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can access the submitted form data from the formData state
    console.log("Form submitted:", formData);
    // You can further process the form data, such as sending it to a backend server
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>Name: {formData.firstName}</div>
      <div>Last Name: {formData.lastName}</div>
      <div>Email: {formData.email}</div>
    </>
  );
};

export default FormExample;
