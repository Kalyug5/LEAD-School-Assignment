import React, { useState } from "react";
import './PostalCodeForm.css';

const PostalCodeForm = ({ onFormSubmit }) => {
  const [postalCode, setPostalCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(postalCode);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Postal Code"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostalCodeForm;
