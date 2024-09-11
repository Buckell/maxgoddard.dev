import Container from "./Container";
import HeadshotSquare from "../../assets/headshot_square.jpg";
import ProfileSquare from "../../assets/profile_square.svg";

export default function FlipImage(props) {
    const {style} = props;

    return (
        <Container style={style} className="flipImage">
            <img src={HeadshotSquare} alt=""/>
            <img src={ProfileSquare} alt=""/>
        </Container>
    );
}