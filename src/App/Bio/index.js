import Container from "./Container";
import {useEffect, useState} from "react";
import PopIn from "../../components/PopIn";
import FlipImage from "../../components/FlipImage";
import {Link} from "react-router-dom";


const Description = `
    I am an engineer and software developer. I'm currently attending the Georgia Institute of Technology
    for Nuclear Engineering, with a focus toward reactor design and fusion energy. Currently, I am working in a
    lab focusing on reactor cybersecurity and development of a reactor coolant loop testbed, and I am also helping
    develop a nuclear criticality safety course in collaboration with Oak Ridge National Laboratory with funding from
    the Department of Energy. Aside from that, I have a love for the outdoors, programming, building things, and 
    exploring different interests.
`;

export default function Bio() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [setLoaded]);

    return (
        <Container>
            <div className="primary">
                <Link to='/about'>
                    <FlipImage />
                </Link>
                <div className="info">
                    <h2>
                        <PopIn show={loaded} delay="300ms">Hello! </PopIn>
                        <PopIn show={loaded} delay="800ms">My </PopIn>
                        <PopIn show={loaded} delay="900ms">name </PopIn>
                        <PopIn show={loaded} delay="1000ms">is </PopIn>
                    </h2>
                    <h1>
                        <PopIn show={loaded} delay="1200ms">Max </PopIn>
                        <PopIn show={loaded} delay="1300ms">Goddard</PopIn>
                    </h1>
                    <p>
                        <PopIn show={loaded} delay="1500ms">
                            {Description}
                        </PopIn>
                    </p>
                </div>
            </div>
        </Container>
    );
}