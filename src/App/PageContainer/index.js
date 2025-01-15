import NavigationLink from "../Navigation/NavigationLink";
import Navigation from "../Navigation";
import Container from "./Container";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {onClickOpenNewTab} from "../../util";


export default function PageContainer(props) {
    const {children} = props;

    const navigate = useNavigate();

    return (
        <Container>
            <Navigation
                socials={
                    <>
                        <FontAwesomeIcon icon={faLinkedin} onClick={onClickOpenNewTab('https://linkedin.com/in/max-goddard/')} />
                        <FontAwesomeIcon icon={faGithub} onClick={onClickOpenNewTab('https://github.com/Buckell/')} />
                    </>
                }
            >
                <NavigationLink onClick={() => navigate('/')}>
                    Home
                </NavigationLink>
                <NavigationLink onClick={() => navigate('/about')}>
                    About
                </NavigationLink>
                <NavigationLink onClick={() => navigate('/projects')}>
                    Projects
                </NavigationLink>
                <NavigationLink onClick={() => navigate('/skills')}>
                    Skills
                </NavigationLink>
            </Navigation>

            {children}
        </Container>
    )
}