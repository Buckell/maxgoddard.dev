import styled from "styled-components";

export default styled.div`
    margin-top: 100px;

    position: relative;
    width: 196px;
    height: 196px;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        border-radius: 100%;

        filter: drop-shadow(0 0 10px #ffffff30);
        opacity: 1;

        transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
    }

    img:first-of-type {
        z-index: 50;
    }

    img:last-of-type {
        z-index: 30;
        opacity: 0;
        filter: drop-shadow(0 0 10px #10101030);
    }

    &:hover img:first-of-type {
        transform: rotate3d(0, 1, 0, 180deg);
        opacity: 0;
    }

    &:hover img:nth-of-type(2) {
        transform: rotate3d(0, 1, 0, 180deg);
        opacity: 1;
    }
`;