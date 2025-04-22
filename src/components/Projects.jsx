import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import "../components/Projects.css";
import { data } from "../data.js";
import React from "react";

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="purple">projects</span>
          </h1>
          <ul className="project__list">
            {data.map((data) => (
              <li className="project">
                <div className="project__wrapper">
                  <img src={data.projectPic} className="project__img" alt="" />
                  <div className="project__wrapper--bg"></div>
                  <div className="project__description">
                    <h3 className="project__description--title">
                      {data.title}
                    </h3>
                    <h4 className="project__description--sub-title">
                      {data.languages}
                    </h4>
                    <p className="project__description--para">{data.desc}</p>
                    <div className="project__description--links">
                      <a
                        href={data.link}
                        className="project__description--link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <LinkIcon />
                      </a>
                      <a href={data.github}>
                        <GitHubIcon style={{ color: "white" }} />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
