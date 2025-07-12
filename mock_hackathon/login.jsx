// src/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", email, password);
    // Fake login → just redirect
    navigate("/dashboard");
  };

return (
    <div
        style={{
            backgroundImage: "url('https://i.pinimg.com/736x/44/66/1b/44661bffce5e8fe43240956e3d50cd61.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontFamily: "'Arial', sans-serif",
            animation: "fadeIn 2s ease-in-out",
        }}
    >
        <div
            style={{
                padding: "2rem",
                textAlign: "center",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                animation: "slideIn 1.5s ease-out",
            }}
        >
            <h2
                style={{
                    marginBottom: "1.5rem",
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    animation: "fadeIn 2s ease-in-out",
                }}
            >
                Login to Skill Swap
            </h2>
            <form
                onSubmit={handleLogin}
                style={{ display: "inline-block", textAlign: "left" }}
            >
                <div style={{ marginBottom: "1rem" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "0.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{
                            padding: "0.5rem",
                            width: "200px",
                            border: "1px solid white",
                            borderRadius: "5px",
                            backgroundColor: "transparent",
                            color: "white",
                            outline: "none",
                            animation: "fadeIn 2s ease-in-out",
                        }}
                    />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "0.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Password:
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            padding: "0.5rem",
                            width: "200px",
                            border: "1px solid white",
                            borderRadius: "5px",
                            backgroundColor: "transparent",
                            color: "white",
                            outline: "none",
                            animation: "fadeIn 2s ease-in-out",
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "0.5rem 1rem",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#007BFF",
                        color: "white",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "background-color 0.3s",
                        animation: "bounceIn 1.5s ease-out",
                    }}
                    onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#0056b3")
                    }
                    onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#007BFF")
                    }
                >
                    Login
                </button>
            </form>
        </div>
        <style>
            {`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes slideIn {
                    from {
                        transform: translateY(-50px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                @keyframes bounceIn {
                    0% {
                        transform: scale(0.9);
                        opacity: 0.7;
                    }
                    50% {
                        transform: scale(1.1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}
        </style>
    </div>
);
}

export default LoginPage;
