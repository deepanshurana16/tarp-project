import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Navbarforlogin from "./Navbarforlogin"; // Import the Navbarforlogin component

const Welcome = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger the logo fade-in after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    overflow: "hidden",
  };

  const imageContainerStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const imageStyle = {
    maxWidth: "80%", // Ensure it is fully visible without stretching
    height: "auto",
    animation: isLoaded ? "fadeIn 2s ease-in-out" : "none", // Apply fade-in animation
  };

  const textContainerStyle = {
    flex: 1,
    padding: "0 20px",
    backgroundColor: "#2e2b81",
    color: "#ffff",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const headerStyle = {
    fontSize: "2.8rem", // Increased font size
    fontWeight: "bold", // Made the font bold
    marginBottom: "10px",
    marginLeft: "40px",
    fontFamily: "sans-serif", // Added sans-serif font
    textAlign: "center", // Center-align the header
  };

  const headerStyle1 = {
    fontSize: "1.2rem", // Increased font size
    fontWeight: "bold", // Made the font bold
    marginBottom: "10px",
    marginLeft: "40px",
    fontFamily: "sans-serif", // Added sans-serif font
    textAlign: "center", // Center-align the header
  };

  const textStyle = {
    fontSize: "16px",
  };

  const buttonStyle = {
    backgroundColor: "#eb0c70",
    color: "#ffffff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "40px",
  };

  const buttonStyle2 = {
    backgroundColor: "#eb0c70",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "40px",
    backgroundColor: "transparent",
    border: "2px solid #eb0c70",
    padding: "10px 20px",
    color: "#ffffff",
    transition: "background-color 0.3s ease",
  };

  return (
    <div>
      {/* Navbar component added at the top */}
      <Navbarforlogin />

      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          {/* Logo with fade-in animation */}
          <img
            style={imageStyle}
            src={require("../Assets/vitlogowelcome.png")}
            alt="VIT Logo"
          />
        </div>

        <div style={textContainerStyle}>
          <h1 className="font-link" style={headerStyle}>
            Welcome to VHOST:<br></br>Your Home Away from Home
          </h1>
          <h3 className="font-link2" style={headerStyle1}>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
                strings: [
                  "Manage hostel maintenance requests effortlessly.",
                  "Locate eateries, recreational centers, and more!",
                  "Marketplace for buying and selling personal items.",
                  "Your all-in-one solution for hostel life.",
                ],
              }}
            />
          </h3>
          <div
            className="buttonsforloginsignup"
            style={{
              direction: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Link to="/login">
              <button style={buttonStyle}>Log In</button>
            </Link>
            <Link to="/signup">
              <button style={buttonStyle2}>New Here? Get Started!</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Keyframes for fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Welcome;
