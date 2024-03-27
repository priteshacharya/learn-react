import React, { useState } from "react";

const SpreadOperator = () => {
  const [person, setPerson] = useState({
    name: {
      first: "Pritesh",
      last: "Acharya",
    },
    email: "abc@gmail.com",
  });

  const handleFirstNameChange = (e) => {
    setPerson({
      ...person,
      name: {
        ...person.name,
        first: e.target.value,
      },
    });
  };

  const handleLastNameChange = (e) => {
    setPerson({
      ...person,
      name: {
        ...person.name,
        last: e.target.value,
      },
    });
  };

  const handleEmailChange = (e) => {
    setPerson({
      ...person,
      email: e.target.value,
    });
  };
  return (
    <>
      <label>
        First name:
        <input value={person.name.first} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.name.last} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.name.first} {person.name.last} ({person.email})
      </p>
      <p>
        Note that the ... spread syntax is “shallow”—it only copies things one
        level deep. This makes it fast, but it also means that if you want to
        update a nested property, you’ll have to use it more than once.
      </p>
    </>
  );
};

export default SpreadOperator;
