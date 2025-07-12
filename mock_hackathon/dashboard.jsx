// src/Dashboard.jsx
import React from "react";

function Dashboard() {
return (
    <div
        style={{
            padding: "2rem",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
            backgroundImage: "url('https://i.pinimg.com/736x/64/0d/83/640d83ea218b5ca23164a9ec2fcd2846.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "#fff",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            animation: "fadeIn 1.5s ease-in-out",
        }}
    >
        <style>
            {`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}
        </style>
        <div style={{ marginBottom: "2rem" }}>
            <img
                src="https://i.pinimg.com/736x/e0/a1/16/e0a1164f2dcf5b6a5589d0ff45914c10.jpg"
                alt="Profile"
                style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    border: "4px solid #fff",
                }}
            />
        </div>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Welcome to your Dashboard 🎉
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            Hi John Doe 👋
        </p>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
            These are your current skills:
        </p>
        <div style={{ textAlign: "center" }}>
            <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                Skills Offered:
            </h4>
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
                Web Development, Graphic Design
            </p>
            <h4 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                Skills Wanted:
            </h4>
            <p style={{ fontSize: "1.2rem" }}>Data Analysis, Public Speaking</p>
        </div>
        <hr style={{ width: "80%", margin: "2rem auto", borderColor: "#fff" }} />
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>About Swap Skill</h3>
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
                Swap Skill is a platform where individuals can exchange their skills and knowledge to help each other grow. Whether you're looking to learn something new or share your expertise, Swap Skill is the place for you!
            </p>
            <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                Location: 123 Skill Street, Knowledge City
            </p>
        </div>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Follow Us</h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "1.5rem",
                    }}
                >
                    Facebook
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "1.5rem",
                    }}
                >
                    Twitter
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "1.5rem",
                    }}
                >
                    Instagram
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "1.5rem",
                    }}
                >
                    LinkedIn
                </a>
            </div>
        </div>
    </div>
);
}

export default Dashboard;