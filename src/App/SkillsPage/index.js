import React, {useEffect, useState} from "react";
import Container from "./Container";
import Footer from "../Footer";
import PageContainer from "../PageContainer";
import SkillsList from "./SkillsList";
import Skill from "./Skill";
import SkillIcon from "./SkillIcon";
import SkillLevel from "./SkillLevel";
import Max from "../../Max";

export default function SkillsPage() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        Max.getSkills().then(setSkills);
    }, [setSkills]);

    const generals = skills.filter((skill) => skill.category === 'general');
    const languages = skills.filter((skill) => skill.category === 'language');
    const technologies = skills.filter((skill) => skill.category === 'technology');
    const programs = skills.filter((skill) => skill.category === 'program');

    const displaySkills = (skills) => {
        return skills.map((skill) => (
            <Skill
                key={skill.title}
            >
                <SkillIcon src={skill.icon}/>

                <h2>{skill.title}</h2>

                <SkillLevel level={skill.level} color={skill.color}/>

                <p>
                    {skill.description}
                </p>
            </Skill>
        ));
    };

    return (
        <PageContainer>
            <Container>
                <h1>General</h1>

                <SkillsList>
                    {displaySkills(generals)}
                </SkillsList>

                <h1>Technology</h1>

                <SkillsList>
                    {displaySkills(technologies)}
                </SkillsList>

                <h1>Programming Languages</h1>

                <SkillsList>
                    {displaySkills(languages)}
                </SkillsList>

                <h1>Programs</h1>

                <SkillsList>
                    {displaySkills(programs)}
                </SkillsList>

                <Footer/>
            </Container>
        </PageContainer>
    );
}