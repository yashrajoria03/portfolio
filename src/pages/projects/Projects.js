import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

import img1 from "../../assests/images/amka1.png";

class Projects extends Component {
  render() {
    const ProjectsData = [
      {
        id: "123123",
        name: "Ecommerce Site",
        url: "https://github.com/yashrajoria03/mern-ecommerce",
        description:
          "Amka Is a Mern Stack Ecommerce site where user can search buy and pay online for the items purchase",
        img: img1,
      },
      {
        id: "1223123",
        name: "Crypto Tracker",
        url: "https://github.com/yashrajoria03/crypto-app",
        description:
          "A simple crytocurrency exchange made using react and an coingecko api. It show realtime price, market share as well other data to the user.",
      },
      {
        id: "1213123",
        name: "Algorithm Visualizer",
        url: "https://github.com/yashrajoria03/algo-visualizer",
        description:
          "An algorithm visualization tool built using html, css and javascript. It shows how the algorithms works visually in a simple manner using bars representing data.",
      },
    ];

    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.map((x) => {
            return <GithubRepoCard repo={x} theme={"materialTealTheme"} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
