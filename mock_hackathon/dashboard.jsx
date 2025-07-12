// src/Dashboard.jsx
import React from "react";

function Dashboard() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Welcome to your Dashboard 🎉</h2>
      <p>Hi John Doe 👋</p>
      <p>These are your current skills offered and skills wanted:</p>

      <div style={{ marginTop: "2rem" }}>
        <h4>Skills Offered:</h4>
        <ul>
          <li>Web Development</li>
          <li>Graphic Design</li>
        </ul>

        <h4>Skills Wanted:</h4>
        <ul>
          <li>Data Analysis</li>
          <li>Public Speaking</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
