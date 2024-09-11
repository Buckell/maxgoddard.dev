import HamburgerIcon from "./HamburgerIcon";
import {useState} from "react";
import Container from "./Container";
import SideGlow from "./SideGlow";
import LinkContainer from "./LinkContainer";
import SocialsContainer from "./SocialsContainer";

export default function Navigation(props) {
    const {children, socials} = props;

    const [open, setOpen] = useState(false);

    return (
        <>
            <HamburgerIcon value={open} onChange={setOpen} />
            <Container className={open ? 'opened' : 'closed'} onClick={() => setOpen(false)}>
                <SideGlow className={open ? 'opened' : 'closed'} />
                <LinkContainer className={open ? 'opened' : 'closed'}>
                    {children}
                </LinkContainer>
                <SocialsContainer className={open ? 'opened' : 'closed'}>
                    {socials}
                </SocialsContainer>
            </Container>
        </>
    );
}