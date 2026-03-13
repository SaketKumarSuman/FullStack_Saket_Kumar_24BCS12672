import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      name: name,
      email: email,
      age: age
    });
  };

  return (
    <div style={{padding:"20px"}}>

      <h2>User Information Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <br/>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br/><br/>

        <label>Email:</label>
        <br/>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br/><br/>

        <label>Age:</label>
        <br/>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Submit</button>

      </form>

      {submittedData && (
        <div>
          <h3>Data Saved Successfully</h3>

          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}

    </div>
  );
}

export default App;
