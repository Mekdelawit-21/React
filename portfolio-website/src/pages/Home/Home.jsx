
import { useState, useEffect } from "react";
import Profile from "../../assets/photo_2025-08-06_00-00-29.jpg";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import "./home.css";

const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ["Web Developer", "Graphics Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="home-container grid">
      <img src={Profile} alt="Mekdelawit Hailu" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">
          <span>I'm Mekdelawit Hailu</span> <br /> <br />
          <div className="role-container">
            {roles.map((role, index) => (
              <p
                key={role}
                className={`role ${
                  index === currentRoleIndex ? "active" : ""
                } ${
                  role === "Web Developer" ? "web-developer" : "graphics-designer"
                }`}
              >
                {role}
              </p>
            ))}
          </div>
        </h1>
       
        <h4 className="home-description">
          Hello! I'm <strong>Mekdelawit Hailu</strong>, a passionate{" "}
          <strong className="home-titles">
            {" "}
            <span>web developer</span>{" "}
          </strong>
          and{" "}
          <strong className="home-titles">
            <span>graphics designer</span>{" "}
          </strong>
          dedicated to creating beautiful, functional digital experiences.
          <br />
          <br />
          My approach combines creative problem-solving with clean, efficient
          code to deliver websites that not only look stunning but perform
          exceptionally across all devices.
        </h4>

        <Link to="/about" className="button">
          More About Me
          <span className="button-icon">
            <RiArrowRightLine />
          </span>
        </Link>
      </div>

      <div className="color-block"></div>
    </section>
  );
};

export default Home;