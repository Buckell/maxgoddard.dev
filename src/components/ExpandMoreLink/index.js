import Container from "./Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

export default function ExpandMoreLink() {
    return (
        <Container>
            <h3>Learn more</h3>
            <FontAwesomeIcon icon={faAngleDown} />
        </Container>
    );
}