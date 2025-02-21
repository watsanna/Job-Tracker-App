import React, { useState } from "react";

const AddJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");

  const handleAddJob = (e) => {
    e.preventDefault();
    // Add job logic here (e.g., save to local storage)
  };

  return (
    <div>
      <h1>Add Job</h1>
      <form onSubmit={handleAddJob}>
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default AddJob;