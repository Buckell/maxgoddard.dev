import Container from "./Container";
import {useEffect, useState} from "react";
import PopIn from "../../components/PopIn";
import FlipImage from "../../components/FlipImage";
import {Link} from "react-router-dom";


const Description = `
    I am a nuclear engineering student at the Georgia Institute of Technology. I am a big fan of nuclear energy, and I
    believe it is necessary part of our energy future. Within nuclear, I have a love for plant design, public policy,
    and regulation. Currently, I am a Licensing Engineering Intern at Blue Energy, a strategic power plant developer 
    using SMR technology. This internship is teaching me all about regulation, how the NRC works, and how plants get
    built. Aside from that, I also have interests in software development (see below), the outdoors, building things
    (see above), and exploring different interests.
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