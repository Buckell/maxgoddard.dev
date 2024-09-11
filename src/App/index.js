import Bio from "./Bio";
import Projects from "./Projects";
import Footer from "./Footer";
import ProjectImage from "./Projects/ProjectImage";
import Project from "./Projects/Project";
import ProjectTitle from "./Projects/ProjectTitle";
import ProjectDescription from "./Projects/ProjectDescription";
import PageContainer from "./PageContainer";
import SkillCarousel from "./SkillCarousel";
import Max from "../Max";
import useResource from "../useResource";

export default function App() {
    const [skills] = useResource(Max.getSkills, []);
    const [projects] = useResource(Max.getProjects, []);

    const displaySkills = skills.filter((skill) => skill.display);

    return (
        <PageContainer>
            <Bio />

            <Projects>
                {projects.map((project) => (
                    <Project key={project.title}>
                        <ProjectImage src={project.image} />
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>{project.brief}</ProjectDescription>
                    </Project>
                ))}
            </Projects>

            <SkillCarousel skills={displaySkills} />

            <Footer />
        </PageContainer>
    );
}