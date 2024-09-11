import React from "react";
import Container from "./Container";
import Footer from "../Footer";
import FlipImage from "../../components/FlipImage";
import PageContainer from "../PageContainer";
import Project from "./Project";
import ProjectsList from "./ProjectsList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import ProjectButton from "./ProjectButton";
import useResource from "../../useResource";
import Max from "../../Max";
import {onClickOpenNewTab} from "../../util";
import {Link} from "react-router-dom";

export default function ProjectsPage() {
    const [projects] = useResource(Max.getProjects, []);

    return (
        <PageContainer>
            <Container>
                <h1>Projects</h1>

                <ProjectsList>
                    {projects.map((project) => (
                        <Project key={project.title}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>

                            {project.links.map((link) => (
                                <ProjectButton key={link.title} onClick={link.location && onClickOpenNewTab(link.location)}>
                                    <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
                                </ProjectButton>
                            ))}
                        </Project>
                    ))}
                </ProjectsList>

                <Footer />
            </Container>
        </PageContainer>
    );
}