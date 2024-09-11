import styled from "styled-components";

export default styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;

    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-end;

    opacity: 0;
    transform: translateY(200%);
    transition: opacity 250ms ease-in-out, transform 200ms ease-in-out;

    color: white;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    text-align: right;
    text-transform: uppercase;
    font-size: 22pt;

    &.opened {
        transform: translateX(0);
        opacity: 1;
    }

    & > * {
        margin-left: 15px;
        cursor: pointer;
        color: #dddddd;
    }
`;