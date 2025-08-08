import Info from "../../components/Info"
import Cv from "../../pdf/Mekdelawit_Hailu_Cv.pdf";
import { RiDownload2Line } from "react-icons/ri"
import Stats from "../../components/Stats"
import { skill } from "../../Data"
import SkillsItems from "../../components/SkillsItems"
import{resume} from '../../Data'
import ResumeItem from "../../components/ResumeItem"
import './about.css'

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <h4>
          <strong className="home-titles">
            {" "}
            <span>Full-Stack Developer & Graphic Designer</span>
          </strong>{" "}
          <br />
          <br /> Hello! I’m Mekdelawit Hailu, a dynamic and detail-oriented
          professional with a dual passion for web development and graphic
          design. With expertise in full-stack development (specializing in
          React and the MERN stack) and I bridge the gap between technical
          precision and creative vision to deliver stunning, functional digital
          experiences. <br />
          <br />
          <strong>- **As a Developer**:</strong> I build performant web
          applications using the MERN stack (MongoDB, Express, React, Node.js),
          with a focus on clean architecture and security. <br />{" "} {" "} <br />
          <strong>- **As a Designer**:</strong> I craft visually compelling user
          experiences with Adobe Creative Suite, ensuring interfaces are as
          intuitive as they are beautiful.
        </h4>
        <br />
        <br />

        <div className="about-container  grid">
          <div className="about-info">
            <h3 className="section-subtitle">Personal Infos</h3>
            <ul className="info-list grid">
              <Info />
            </ul>

            <a href={Cv} download="" className="button">
              Download Cv
              <span className="button-icon">
                <RiDownload2Line />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center">My Skills</h3>

        <div className="skills-container grid">
          <div className="skills-group">
            <h3 className="skills-title">Frontend Developer</h3>

            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === "developer") {
                  return <SkillsItems key={val.id} {...val} />;
                }
              })}
            </div>
          </div>

          <div className="skills-group">
            <h3 className="skills-title">Web Designer</h3>

            <div className="skills-items grid">
              {skill.map((val) => {
                if (val.category === "designer") {
                  return <SkillsItems key={val.id} {...val} />;
                }
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section-subtitle subtitle-center">
          Experience & Education
        </h3>

        <div className="resume-container grid">
          <div className="resume-group grid">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>

          <div className="resume-group grid">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About