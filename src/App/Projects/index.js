import Container from "./Container";
import ProjectContainer from "./ProjectContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

export default function Projects(props) {
    const {children} = props;

    const [frame, setFrame] = useState(0);
    const [frameWidth, setFrameWidth] = useState(1);

    const refreshFrameWidth = () => {
        if (window.innerWidth > 1200) {
            setFrameWidth(3);
            return;
        }

        if (window.innerWidth > 600) {
            setFrameWidth(2);
            return;
        }

        setFrameWidth(1);
    }

    useEffect(() => {
        refreshFrameWidth();
        window.addEventListener("resize", refreshFrameWidth);
        return () => window.removeEventListener("resize", refreshFrameWidth);
    }, [setFrameWidth]);

    const advanceFrame = () => {
        setFrame((frame) => {
            if (frame + frameWidth >= children.length) {
                return 0;
            } else {
                return ++frame;
            }
        })
    };

    const retractFrame = () => {
        setFrame((frame) => {
            if (frame === 0) {
                return children.length - frameWidth;
            } else {
                return --frame;
            }
        })
    };

    return (
        <Container>
            <h1>Projects</h1>

            <div className="carousel">
                <div className="nav next" onClick={advanceFrame}>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </div>
                <div className="nav previous" onClick={retractFrame}>
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </div>

                {children.map((project, index) => (
                    <ProjectContainer
                        key={index}
                        style={{
                            transform: index > frame + frameWidth - 1 ? 'translateX(100vw)' : index < frame ? 'translateX(-100vw)' : '',
                            marginRight: index >= frame && index < frame + frameWidth - 1 ? '40px' : '',
                        }}
                        className={'project ' + (index < frame || index > frame + frameWidth - 1 ? 'invisible' : 'visible')}
                    >
                        {project.props.children}
                    </ProjectContainer>
                ))}
            </div>
        </Container>
    );
}
