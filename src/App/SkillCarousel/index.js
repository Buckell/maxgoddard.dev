import Container, {iconSize, iconSpacing} from "./Container";
import {useEffect, useRef, useState} from "react";
import SkillInformation from "./SkillInformation";
import SkillTitle from "./SkillTitle";
import SkillDescription from "./SkillDescription";

export default function SkillCarousel(props) {
    const {skills} = props;

    const [selectedSkill, setSelectedSkill] = useState();
    const [hidden, setHidden] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const travelSpeed = 75;

    const carouselRef = useRef();

    const resetCarousel = () => {
        setWindowWidth(window.innerWidth);
        setHidden(document.hidden);
    };

    const handleCarousel = () => {
        if (hidden) {
            return;
        }

        let effectIndex = 0;

        const carousel = carouselRef.current;

        if (!carousel || !skills || skills.length === 0) {
            return;
        }

        carousel.innerHTML = '';

        const travelTime = windowWidth / travelSpeed;

        const spawnSkill = (skill) => {
            const element = document.createElement('div');
            element.className = 'item';
            element.style.transition = `transform ${travelTime}s linear, margin-right 100ms ease-in-out, margin-top 100ms ease-in-out, width 100ms ease-in-out, height 100ms ease-in-out`;
            element.style.background = `url(${skill.icon})`;
            element.onclick = () => {
                setSelectedSkill(skill);
            };

            carousel.appendChild(element);

            setTimeout(() => {
                element.remove();
            }, travelTime * 1000 + 1000);

            setTimeout(() => {
                element.style.transform = `translateX(calc(-100vw - ${iconSize}px))`;
            }, 100);

            return element;
        };

        // Spawn initial skills.

        // Length of icon and spacing.
        const graduation = iconSize + iconSpacing + 20 /* Timer compensation. */;

        let position = 0;

        while (true) {
            const element = spawnSkill(skills[effectIndex]);

            element.style.right = `${position - iconSize }px`;

            if (effectIndex + 1 >= skills.length) {
                effectIndex = 0;
            } else {
                effectIndex++;
            }

            if (position > windowWidth) {
                break;
            }

            position += graduation;
        }

        const timeoutId = setInterval(() => {
            if (skills.length === 0) {
                return;
            }

            const skill = skills[effectIndex];

            spawnSkill(skill);

            if (effectIndex + 1 >= skills.length) {
                effectIndex = 0;
            } else {
                effectIndex++;
            }
        }, (iconSize + iconSpacing) / travelSpeed * 1000);

        return () => clearInterval(timeoutId);
    };

    useEffect(handleCarousel, [carouselRef, skills, windowWidth, hidden]); // eslint-disable-line

    useEffect(() => {
        window.addEventListener('resize', resetCarousel);
        document.addEventListener('visibilitychange', resetCarousel);

        return () => {
            window.removeEventListener('resize', resetCarousel);
            document.removeEventListener('visibilitychange', resetCarousel);
        };
    }, [carouselRef]);

    return (
        <Container>
            <h1>Skills</h1>

            <div ref={carouselRef} className="carousel" />

            <div className="skill-description" />

            <SkillInformation>
                {
                    selectedSkill &&
                    <>
                        <img src={selectedSkill.icon} alt="" />
                        <SkillTitle>{selectedSkill.title}</SkillTitle>
                        <SkillDescription>{selectedSkill.description}</SkillDescription>
                    </>
                }
            </SkillInformation>
        </Container>
    );
}