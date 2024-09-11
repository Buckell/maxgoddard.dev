import NavigationLink from "../Navigation/NavigationLink";
import Navigation from "../Navigation";
import Container from "./Container";
import {Link, useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faXTwitter} from "@fortawesome/free-brands-svg-icons";
import {onClickOpenNewTab} from "../../util";


export default function PageContainer(props) {
    const {children} = props;

    const navigate = useNavigate();

    return (
        <Container>
            <Navigation
                socials={
                    <>
                        <FontAwesomeIcon icon={faLinkedin} onClick={onClickOpenNewTab('https://www.linkedin.com/in/max-goddard/')} />
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