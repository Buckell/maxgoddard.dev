import Container from "./Container";
import {useState} from "react";
import useChangeValue from "../../../useChangeValue";

export default function HamburgerIcon(props) {
    const {checkedComponentProps, value} = useChangeValue(props, false);

    return (
        <Container style={props.style}>
            <div className={value ? 'opened' : 'closed'}>
                <input type="checkbox" {...checkedComponentProps} />
                <span/>
                <span/>
                <span/>
            </div>
        </Container>
    )
}