// src/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
return (
    <div style={{ 
        padding: "2rem", 
        textAlign: "center", 
        backgroundImage: "url('https://i.pinimg.com/1200x/75/fe/ab/75feabdb67f58277c020a063e3e3ffe3.jpg')",
        height: "100vh", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        borderRadius: "12px", 
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)", 
        color: "white" 
    }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
            Welcome to Skill Swap!
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
            Exchange skills, grow together 🚀
        </p>
        <Link to="/login">
            <button style={{ 
                marginTop: "1rem", 
                padding: "0.75rem 1.5rem", 
                backgroundColor: "#ff7f50", 
                color: "white", 
                border: "none", 
                borderRadius: "8px", 
                cursor: "pointer", 
                fontSize: "1rem", 
                fontWeight: "bold", 
                transition: "transform 0.2s, box-shadow 0.2s", 
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)" 
            }}
            onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
            }}>
                Get Started → Login
            </button>
        </Link>
    </div>
);
}

export default LandingPage;
